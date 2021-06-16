<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Filter;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Wordpress\Filter\AbstractFilter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class AddPartnerToPostTypeFilter extends AbstractFilter
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): mixed
    {
        $query_args = current(func_get_args());

        $post = $this->wordpressMiddleware->getCurrentPost();

        if ($post->post_type === Partner::POST_TYPE_NAME || $post->post_type === Product::POST_TYPE_NAME) {
            $query_args['who'] = '';
            $query_args['role__in'] = [Partner::POST_TYPE_NAME, 'administrator'];
        }

        return $query_args;
    }

    public static function getName(): string
    {
        return 'wp_dropdown_users_args';
    }
}
