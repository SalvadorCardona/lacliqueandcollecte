<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use App\Infrastructure\Wordpress\Middleware\Formatter\WpQueryFormatter;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpUserFormatter;
use WP_User;

class MiddlewareConfigurationFactory
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private WpQueryFormatter $wpQueryFormatter,
        private WpUserFormatter $wpUserFormatter
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
            ->setMainMenu($this->wordpressMiddleware->wpGetNavMenuItems('main-menu'));
    }

    private function formatUser(WP_User $wpUser): array
    {
        // TODO : i need to should a formatter
        return (array) $wpUser;
    }
}
