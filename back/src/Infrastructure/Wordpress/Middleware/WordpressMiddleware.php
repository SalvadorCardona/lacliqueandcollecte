<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use WP_Error;
use WP_Post;
use WP_Query;
use WP_User;
use wpdb;

class WordpressMiddleware
{
    public function __construct()
    {
    }

    public function trans(string $trans): string
    {
        return $trans;
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

    public function addAction(string $tag, callable $functionToAdd, int $priority = 10, int $acceptedArgs = 1): void
    {
        add_action($tag, $functionToAdd, $priority, $acceptedArgs);
    }

    public function addFilter(string $tag, callable $functionToAdd, int $priority = 10, int $acceptedArgs = 1): void
    {
        add_filter($tag, $functionToAdd, $priority, $acceptedArgs);
    }

    public function registerTaxonomy(string $taxonomyName, array $types = [], array $args = []): void
    {
        register_taxonomy($taxonomyName, $types, $args);
    }

    public function getThemeMod(string $name): mixed
    {
        return get_theme_mod('custom_logo');
    }

    public function wpGetCurrentUser(): ?WP_User
    {
        return wp_get_current_user();
    }

    public function wpCreateNonce(string $string): string
    {
        return wp_create_nonce($string);
    }

    public function getSiteUrl(): string
    {
        return get_site_url();
    }

    public function getCurrentWpQuery(): WP_Query
    {
        global $wp_query;

        return $wp_query;
    }

    public function wpGetNavMenuItems(string $menuName): ?array
    {
        return wp_get_nav_menu_items($menuName);
    }

    public function wpDeregisterStyle(string $handle): void
    {
        wp_deregister_style($handle);
    }

    public function wpDequeueStyle(string $handle): void
    {
        wp_dequeue_style($handle);
    }

    public function wpDeregisterScript(string $handle): void
    {
        wp_deregister_script($handle);
    }

    public function wpDequeueScript(string $handle): void
    {
        wp_dequeue_script($handle);
    }
}
