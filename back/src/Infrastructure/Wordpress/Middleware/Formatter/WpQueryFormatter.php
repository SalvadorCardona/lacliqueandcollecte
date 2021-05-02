<?php
declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use WP_Query;

/**
 * Todo : I need unitTest
 */
class WpQueryFormatter extends Formatter
{
    /**
     * @param WP_Query $data
     * @return array
     */
    public function format($data): array
    {
        $unauthorizedKeys =  [
            "thumbnails_cached",
            "tax_query",
            "request",
            "dateQuery",
            "stopwords",
            "query_vars_changed",
            "query_vars_hash",
            "query_vars",
            "meta_query",
            "compat_fields",
            "compat_methods",
            " WP_Query query_vars_hash",
            " WP_Query query_vars_changed",
            " WP_Query stopwords",
            " WP_Query compat_fields",
            " WP_Query compat_methods",
        ];

        $wpQueryFormatted = [];

        foreach ((array) $data as $key => $value) {
            if (!in_array($key, $unauthorizedKeys)) {
                $wpQueryFormatted[$key] = $value;
            }
        }

        return $wpQueryFormatted;
    }
}