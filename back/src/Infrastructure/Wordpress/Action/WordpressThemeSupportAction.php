<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Partner\Partner;

class WordpressThemeSupportAction implements ActionInterface
{
    public function __invoke(): void
    {
        /**
         * Used for that Woocommerce use index.php and not single-product.php
         */
        add_filter('woocommerce_template_loader_files', function ($string) {
            return is_product() ? ['index.php'] : [];
        });

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
                'height' => 100,
                'width' => 350,
                'flex-height' => true,
                'flex-width' => true,
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
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
