<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use App\Infrastructure\Wordpress\Enum\TaxonomyType;
use App\Infrastructure\Wordpress\Middleware\Entity\MiddlewareConfiguration;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpProductsCategoriesFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpQueryFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpTranslateFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpUserFormatter;

class MiddlewareConfigurationFactory
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private WpQueryFormatter $wpQueryFormatter,
        private WpUserFormatter $wpUserFormatter,
        private WpTranslateFormatter $wpTranslateFormatter,
        private WpProductsCategoriesFormatter $wpCategoriesFormatter
    ) {
    }

    public function format(): MiddlewareConfiguration
    {
        $productCategories = $this->wpCategoriesFormatter->format(
            $this->wordpressMiddleware->getTerms(
                [
                    'taxonomy' => TaxonomyType::PRODUCT_CAT,
                    'hide_empty' => true,
                    'exclude' => 15,
                    'childless' => true,
                ]
            )
        );

        return (new MiddlewareConfiguration())
            ->setWpApiKey($this->wordpressMiddleware->wpCreateNonce('wp_rest'))
            ->setUser($this->wpUserFormatter->format($this->wordpressMiddleware->wpGetCurrentUser()))
            ->setSiteUrl($this->wordpressMiddleware->getSiteUrl())
            ->setWpQuery($this->wpQueryFormatter->format($this->wordpressMiddleware->getCurrentWpQuery()))
            ->setWcStoreApi($this->wordpressMiddleware->wpCreateNonce('wc_store_api'))
            ->setTranslation($this->wpTranslateFormatter->format($this->wordpressMiddleware->getL10n()->entries))
            ->setProductsCategories($productCategories);
            ->setMainMenu($this->wordpressMiddleware->keysToCamel($this->wordpressMiddleware->wpGetNavMenuItems('main-menu')));
    }
}
