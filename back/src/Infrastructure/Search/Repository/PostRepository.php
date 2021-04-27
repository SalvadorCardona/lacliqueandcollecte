<?php
declare(strict_types=1);

namespace App\Infrastructure\Search\Repository;

use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Entity\SearchResponse;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostRepository
{

    private const TAXONOMY_LIST = [
        'categories',
        'city'
    ];

    private const META_LIST = [
        'price'
    ];

    private $itemPerPage = 20;

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function search(SearchRequest $searchRequest): SearchResponse
    {
        $query = $this->wordpressMiddleware->wpQuery([
            'post_type' => 'product'
        ]);

        return new SearchResponse(
            (array) $query->posts,
            $query->post_count,
            $this->itemPerPage
        );
    }
}