<?php

declare(strict_types=1);

namespace App\Action;

use App\ActionInterface;

class WordpressThemeSupport implements ActionInterface
{

    public function __invoke(): void
    {
        /**
         * Disable woocomerce style for product page
         */
        if (strpos($_SERVER['REQUEST_URI'], 'produit')) {
            add_filter('woocommerce_enqueue_styles', '__return_empty_array');
        }

        add_theme_support("post-thumbnails");

        add_theme_support("menus");

        add_theme_support('title-tag');

        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            )
        );
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 100,
                'width'       => 350,
                'flex-height' => true,
                'flex-width'  => true,
            )
        );

        add_theme_support('woocommerce');
        // Enabling WooCommerce product gallery features (are off by default since WC 3.0.0).
        // zoom.
        add_theme_support('wc-product-gallery-zoom');
        // lightbox.
        add_theme_support('wc-product-gallery-lightbox');
        // swipe.
        add_theme_support('wc-product-gallery-slider');

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

        add_filter('woocommerce_store_api_disable_nonce_check', fn() => true);
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
