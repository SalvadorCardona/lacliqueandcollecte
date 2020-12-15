<?php

declare(strict_types=1);

namespace App\Action;

use App\ActionInterface;

class WordpressThemeSupport implements ActionInterface
{

    public function __invoke(): void
    {
        add_theme_support("post-thumbnails");

        add_theme_support('title-tag');

        /**
         * Add Author for products
         */
        add_post_type_support('product', 'author');

        add_theme_support('add_theme_support');

        /**
         * Add the categories woocommerce for partner
         */
        add_filter('woocommerce_taxonomy_objects_product_cat', function ($args) {
            return [PostTypePartner::POST_TYPE_NAME, ...$args];
        }, 1);
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
