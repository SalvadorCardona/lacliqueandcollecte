<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class WordpressThemeSupportAction implements ActionInterface
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {


        $this->wordpressMiddleware
            ->addThemeSupport("post-thumbnails");

        $this->wordpressMiddleware
            ->addThemeSupport("menus");

        $this->wordpressMiddleware
            ->addThemeSupport('title-tag');

        $this->wordpressMiddleware
            ->addThemeSupport('automatic-feed-links');
        $this->wordpressMiddleware
            ->addThemeSupport('title-tag');
        $this->wordpressMiddleware
            ->addThemeSupport(
                'html5',
                array(
                    'search-form',
                    'comment-form',
                    'comment-list',
                    'gallery',
                    'caption',
                )
            );
        $this->wordpressMiddleware
            ->addThemeSupport(
                'custom-logo',
                array(
                    'height' => 100,
                    'width' => 350,
                    'flex-height' => true,
                    'flex-width' => true,
                )
            );

        $this->wordpressMiddleware
            ->addThemeSupport('woocommerce');
        // Enabling WooCommerce product gallery features (are off by default since WC 3.0.0).
        // zoom.
        $this->wordpressMiddleware
            ->addThemeSupport('wc-product-gallery-zoom');
        // lightbox.
        $this->wordpressMiddleware
            ->addThemeSupport('wc-product-gallery-lightbox');
        // swipe.
        $this->wordpressMiddleware
            ->addThemeSupport('wc-product-gallery-slider');

        /**
         * Add Author for products
         */
        $this->wordpressMiddleware->addPostTypeSupport('product', 'author');

        $this->wordpressMiddleware
            ->addThemeSupport('add_theme_support');
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
