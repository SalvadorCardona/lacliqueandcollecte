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
        'woocommerce-inline'
    ];

    private const SCRIPT_NOT_EXPECTED = [
        'jquery',
        'woocommerce-general',
        'wp-embed'
    ];

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {

        $query = $this->wordpressMiddleware->getCurrentWpQuery();
		$post = $query->post ?? null;
		$postType = $post ? $post->post_type : null;
	    $postName = $post ? $post->post_name : null;

        if (
            $postType === Product::POST_TYPE_NAME
            || $postType === Partner::POST_TYPE_NAME
            || $query->is_tax
            || (int) $this->wordpressMiddleware->getOption('page_on_front') === $query->queried_object_id
            || $postName === 'ui'
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
