<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class DisableAssetsWordpress implements ActionInterface
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
        
    }

    public function __invoke(): void
    {
        $query = $this->wordpressMiddleware->getCurrentWpQuery();
        if ($query->post->post_type === Product::POST_TYPE_NAME
            || $query->post->post_type === Partner::POST_TYPE_NAME
            || $query->is_tax || $query->is_tax || (int) get_option( 'page_on_front' ) === $query->queried_object_id
        ) {
            $this->wordpressMiddleware->wpDequeueStyle('woocommerce-general');
            $this->wordpressMiddleware->wpDeregisterStyle('woocommerce-general');
            $this->wordpressMiddleware->wpDequeueStyle('woocommerce-layout');
            $this->wordpressMiddleware->wpDeregisterStyle('woocommerce-layout');
            $this->wordpressMiddleware->wpDequeueStyle('woocommerce-smallscreen');
            $this->wordpressMiddleware->wpDeregisterStyle('woocommerce-smallscreen');
            $this->wordpressMiddleware->wpDequeueStyle('woocommerce-smallscreen');
            $this->wordpressMiddleware->wpDeregisterStyle('woocommerce-smallscreen');
            $this->wordpressMiddleware->wpDequeueStyle('wc-block-style');
            $this->wordpressMiddleware->wpDeregisterStyle('wc-block-style');
            $this->wordpressMiddleware->wpDequeueStyle('wp-block-library');
            $this->wordpressMiddleware->wpDeregisterStyle('wp-block-library');
            //$this->wordpressMiddleware->wpDequeueStyle('woocommerce-inline');
            //$this->wordpressMiddleware->wpDeregisterStyle('woocommerce-inline');

            $this->wordpressMiddleware->wpDequeueScript('jquery');
            //$this->wordpressMiddleware->wpDequeueScript( 'woocommerce-general' );
            //$this->wordpressMiddleware->wpDeregisterScript( 'woocommerce-general' );
        }
    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}