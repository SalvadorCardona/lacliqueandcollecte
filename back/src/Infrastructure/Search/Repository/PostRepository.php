<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\Repository;

use App\Infrastructure\Partner\Formatter\PartnerFormatter;
use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Entity\SearchResponse;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Woocommerce\Formatter\ProductFormatter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostRepository
{
    private int $itemPerPage = 20;

    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private PartnerFormatter $partnerFormatter,
        private ProductFormatter $productFormatter
    ) {
    }

    public function search(SearchRequest $searchRequest): SearchResponse
    {
        $query = [
            'post_type' => Product::POST_TYPE_NAME,
        ];

        $query['posts_per_page'] = $searchRequest->getPostPerPage() ?? $this->itemPerPage;
        $query['author__in'] = $searchRequest->getAuthors() ?? [];

        $taxonomyList = $searchRequest->getTaxonomies();
        $metaList = $searchRequest->getMetasData();

        $query['tax_query'] = $this->taxonomyQueryFormatter($taxonomyList);
        $query['meta_query'] = $this->metaDataQueryFormatter($metaList);

        $queryResult = $this->wordpressMiddleware->wpQuery($query);

        return new SearchResponse(
            (array) $this->productFormatter->fromList($queryResult->posts),
            $queryResult->post_count,
            $this->itemPerPage
        );
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
