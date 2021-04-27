<?php
declare(strict_types=1);

namespace App\Infrastructure\Search\Api;

use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Repository\PostRepository;
use App\Infrastructure\Wordpress\Api\AbstractApiController;

class SearchApi extends AbstractApiController
{
    public function __construct(private PostRepository $postRepository)
    {
    }

    public function __invoke(): mixed
    {
        $query = $this->request->get_param('query');
        $orderBy = $this->request->get_param('orderBy');
        $orderDirection = $this->request->get_param('orderDirection');
        $filters = json_decode($this->request->get_param('filters'), true);

        $searchRequest = new SearchRequest(
            $query,
            $orderBy,
            $orderDirection,
            $filters,
        );

        return $this->postRepository->search($searchRequest);
    }

    public function getEndPoint(): string
    {
        return 'search';
    }

    public function getArgs(): array
    {
        return [
            'query' => [
                'required' => false
            ],
            'orderBy' => [
                'required' => false
            ],
            'orderDirection' => [
                'required' => false,
                'enum' => ['desc, asc'],
            ],
            'filters' => [
                'required' => false,
                'type' => 'JSON',
            ],
            'offsetLimit' => [
                'required' => false,
                'type' => 'integer',
            ],
        ];
    }
}