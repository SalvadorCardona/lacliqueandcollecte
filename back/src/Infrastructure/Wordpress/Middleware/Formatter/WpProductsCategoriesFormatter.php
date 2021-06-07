<?php

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Term;

class WpProductsCategoriesFormatter extends Formatter
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    /**
     * @param WP_Term[] $data
     */
    public function format($data): array
    {
        $wpTermFiltered = array_values(array_filter($data, function (WP_Term $term) {
            return $term->slug != 'non-classe';
        }));

        return array_map(function (WP_Term $term) {
            $data = $term->to_array();

//            $data['url'] = $this->wordpressMiddleware->getTermLink($term);

            return $data;
        }, $wpTermFiltered);
    }
}
