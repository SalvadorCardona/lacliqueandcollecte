<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\Api;

use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Repository\PostRepository;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;

class SearchApi extends AbstractApiController
{
    public function __construct(private PostRepository $postRepository)
    {
    }

    public function __invoke(): HttpResponse
    {
        $params = json_decode($this->request->get_param('params'), true);

        $search = $this->postRepository->search(SearchRequest::fromArray($params));

        return $this->response($search);
    }

    public function getEndPoint(): string
    {
        return 'search';
    }

    public function getArgs(): array
    {
        return [
            'params' => [
                'required' => false,
                'type' => 'JSON',
            ],
        ];
    }
}
