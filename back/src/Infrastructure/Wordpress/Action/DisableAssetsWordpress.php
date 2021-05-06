<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class DisableAssetsWordpress implements ActionInterface
{
    private const STYLE_NOT_EXPECTED = [
        'woocommerce-general',
        'woocommerce-layout',
        'woocommerce-smallscreen',
        'wc-block-style',
        'wp-block-library',
        'wp-block-library',
        'woocommerce-inline',
    ];

    private const SCRIPT_NOT_EXPECTED = [
        'jquery',
        'woocommerce-general'
    ];

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
            foreach (self::STYLE_NOT_EXPECTED as $styleNotExpected) {
                $this->wordpressMiddleware->wpDeregisterStyle($styleNotExpected);
            }
            foreach (self::SCRIPT_NOT_EXPECTED as $scriptNotExpected) {
                $this->wordpressMiddleware->wpDeregisterScript($scriptNotExpected);
            }
        }
    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}