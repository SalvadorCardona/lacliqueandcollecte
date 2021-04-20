<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use WP_Error;
use WP_Post;
use wpdb;

class WordpressMiddleware
{
    public function __construct(private string $appName)
    {
    }

    public function trans(string $trans): string
    {
        return __($trans, $this->appName);
    }

    public function getWpdb(): wpdb
    {
        /** @var wpdb */
        global $wpdb;
        return $wpdb;
    }

    public function getI18n(): array
    {
        global $i18n;
        return $i18n;
    }

    public function getPost(): ?WP_Post
    {
        global $post;
        return $post;
    }

    public function wpError(string $code, string $message, array $data): WP_Error
    {
        return new WP_Error($code, $message, $data);
    }
}
