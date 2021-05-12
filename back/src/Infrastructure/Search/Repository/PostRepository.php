<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\Repository;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Partner\Formatter\PartnerFormatter;
use App\Infrastructure\Search\Entity\SearchRequest;
use App\Infrastructure\Search\Entity\SearchResponse;
use App\Infrastructure\Search\DeNormalizer\SearchableDeNormalizer;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Woocommerce\Formatter\ProductFormatter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostRepository
{
    private int $itemPerPage = 20;
    private string $defaultPostType = Product::POST_TYPE_NAME;

    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private PartnerFormatter $partnerFormatter,
        private ProductFormatter $productFormatter,
        private SearchableDeNormalizer $searchableFormatter,
        private SearchableRepository $searchableRepository
    ) {
    }

    public function search(SearchRequest $searchRequest): SearchResponse
    {
        $isSearchable = $searchRequest->getSearchable();

        $query = [
            'post_type' => $searchRequest->getPostType() ?? $this->defaultPostType,
        ];

        $query['posts_per_page'] = $searchRequest->getPostPerPage() ?? $this->itemPerPage;
        $query['author__in'] = $searchRequest->getAuthors() ?? [];

        $taxonomyList = $searchRequest->getTaxonomies();
        $metaList = $searchRequest->getMetasData();

        $query['tax_query'] = $this->taxonomyQueryFormatter($taxonomyList);
        $query['meta_query'] = $this->metaDataQueryFormatter($metaList);

        $queryResult = $this->wordpressMiddleware->wpQuery($query);

        return new SearchResponse(
            (array) $this->getFormatter($searchRequest)->fromList($queryResult->posts),
            $queryResult->post_count,
            $this->itemPerPage,
            $isSearchable ? $this->searchableFormatter->format($this->searchableRepository->fetchSearchable($taxonomyList, $metaList)) : null
        );
    }

    public function getFormatter(SearchRequest $searchRequest): Formatter
    {
        if ($searchRequest->getPostType() === Partner::POST_TYPE_NAME) {
            return $this->partnerFormatter;
        }

        return $this->productFormatter;
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
