<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use App\Infrastructure\Wordpress\Middleware\Entity\MiddlewareConfiguration;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpQueryFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpTranslateFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpUserFormatter;

class MiddlewareConfigurationFactory
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private WpQueryFormatter $wpQueryFormatter,
        private WpUserFormatter $wpUserFormatter,
        private WpTranslateFormatter $wpTranslateFormatter
    ) {
    }

    public function format(): MiddlewareConfiguration
    {
        return (new MiddlewareConfiguration())
            ->setWpApiKey($this->wordpressMiddleware->wpCreateNonce('wp_rest'))
            ->setUser($this->wpUserFormatter->format($this->wordpressMiddleware->wpGetCurrentUser()))
            ->setSiteUrl($this->wordpressMiddleware->getSiteUrl())
            ->setWpQuery($this->wpQueryFormatter->format($this->wordpressMiddleware->getCurrentWpQuery()))
            ->setWcStoreApi($this->wordpressMiddleware->wpCreateNonce('wc_store_api'))
            ->setMainMenu($this->wordpressMiddleware->wpGetNavMenuItems('main-menu'))
            ->setTranslation($this->wpTranslateFormatter->format($this->wordpressMiddleware->getL10n()->entries));
    }
}
