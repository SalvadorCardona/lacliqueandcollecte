<?php

namespace App\Util;

use App\Model\MiddlewareConfiguration;

class MiddlewareConfigurationFactory
{
    public static function build(): MiddlewareConfiguration
    {
        global $current_user;
        $logo = get_theme_mod('custom_logo');
        $image = wp_get_attachment_image_src($logo, 'full');
        $image_url = $image[0];
        $user = wp_get_current_user();

        return (new MiddlewareConfiguration())
            ->setUser($user)
            ->setLogoUrl($image_url)
            ->setSiteUrl(get_site_url())
            ->setWcStoreApi(wp_create_nonce('wc_store_api'))
            ->setMainMenu(wp_get_nav_menu_items('main-menu'));
    }
}
