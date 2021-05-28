<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use MO;
use NOOP_Translations;
use Translations;
use WP_Error;
use WP_Post;
use WP_Post_Type;
use WP_Query;
use WP_Role;
use WP_User;
use wpdb;
use WP_Term;

class WordpressMiddleware
{
    private const TRANSLATE_DOMAIN = 'zartizana';

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


    public function getL10n(): Translations|NOOP_Translations
    {

        return get_translations_for_domain(self::TRANSLATE_DOMAIN);
    }

    public function getCurrentPost(): ?WP_Post
    {
        return get_post();
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

    public function addRole(string $role, string $displayName, array $capabilities): ?WP_Role
    {
        return add_role($role, $displayName, $capabilities);
    }


    public function registerPostType(string $postType, array $args): WP_error|WP_Post_Type
    {
        return register_post_type($postType, $args);
    }

    public function registerExtendedFieldGroup(array $config): void
    {
        register_extended_field_group($config);
    }

    public function registerRestRoute(string $namespace, string $route, array $args, null|bool $override = false): bool
    {
        return register_rest_route($namespace, $route, $args, $override);
    }

    public function wpEnqueueStyle(string $handle, string $src, array $deps, string|bool|null $ver, string $media): void
    {
        wp_enqueue_style($handle, $src, $deps, $ver, $media);
    }

    public function wpEnqueueScript(string $handle, string $src, array $deps, string|bool|null $ver, bool $inFooter): void
    {
        wp_enqueue_script($handle, $src, $deps, $ver, $inFooter);
    }

    public function wpLocalizeScript(string $handle, string $objectName, array $l10n): bool
    {
        return wp_localize_script($handle, $objectName, $l10n);
    }

    public function addThemeSupport(string $feature, mixed ...$args): ?bool
    {
        return add_theme_support($feature, ...$args);
    }

    public function addPostTypeSupport(string $postType, string|array $feature, mixed ...$args): void
    {
        add_post_type_support($postType, $feature, ...$args);
    }

    public function getTerms(array $args): ?array
    {
        return get_terms($args);
    }

    public function getTermLink(WP_Term $term): string
    {
        return get_term_link($term);
    }

    public function getOption(string $option): mixed
    {
        return get_option($option);
    }
}
