<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use WP_Error;
use WP_Post;
use WP_Query;
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

    public function getPost(int $postId): ?WP_Post
    {
        return get_post($postId);
    }

    public function getPostMeta(int $postId): ?array
    {
        $postMeta = get_post_meta($postId);

        return $postMeta ? $postMeta : null;
    }

    public function wpError(string $code, string $message, array $data): WP_Error
    {
        return new WP_Error($code, $message, $data);
    }

    public function getAttachmentImageSrc(int $imageId): array
    {
        return wp_get_attachment_image_src($imageId);
    }

    public function wpQuery(array $query): WP_Query
    {
        return new WP_Query($query);
    }
}
