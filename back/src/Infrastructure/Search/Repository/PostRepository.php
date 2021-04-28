<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\Repository;

use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Entity\SearchResponse;
use App\Infrastructure\Wordpress\Enum\MetaType;
use App\Infrastructure\Wordpress\Enum\TaxonomyType;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostRepository
{
    private const TAXONOMY_LIST = [
        'categories',
        'product_cat',
        'city'
    ];

    private const META_LIST = [
        'price'
    ];

    private int $itemPerPage = 20;

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function search(SearchRequest $searchRequest): SearchResponse
    {
        $query = [
            'post_type' => 'product',
        ];

        $taxonomyList = $this->extractToFilter($searchRequest->filters, TaxonomyType::values());
//        $metaList = $this->extractToFilter($searchRequest->filters, MetaType::values());

        $query['tax_query'] = $this->taxonomyQueryFormatter($taxonomyList);
//        $query['meta_query'] = $this->metaDataQueryFormatter($metaList);

        $query = $this->wordpressMiddleware->wpQuery($query);

        return new SearchResponse(
            (array) $query->posts,
            $query->post_count,
            $this->itemPerPage
        );
    }

    private function extractToFilter(array $filters, array $extractList): array
    {
        $result = [];

        foreach ($filters as $key => $filter) {
            if (in_array($key, $extractList)) {
                $result[$key] = $filter;
            }
        }

        return $result;
    }

    private function taxonomyQueryFormatter(array $filters): array
    {
        if (count($filters) > 0) {
            return [
                'relation' => 'OR',
                ...array_map(function (string $key, array $taxonomy) {
                    return [
                        'taxonomy' => $key,
                        'field'    => 'term_id',
                        'terms'    => $taxonomy,
                    ];
                }, array_keys($filters), $filters)
            ];
        }

        return [];
    }

    private function metaDataQueryFormatter(array $filters): array
    {
        if (count($filters) > 0) {
            return [
                'relation' => 'OR',
                ...array_map(function (string $key, array $metaValues) {
                    return [
                        'key' => $key,
                        'value'    => $metaValues,
                        'compare' => 'IN',
                    ];
                }, array_keys($filters), $filters)
            ];
        }

        return [];
    }
}
