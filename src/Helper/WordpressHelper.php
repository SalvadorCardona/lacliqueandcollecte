<?php

declare(strict_types=1);

namespace App\Helper;

use App\Kernel;
use wpdb;
use WP_Post;

class WordpressHelper
{
    public static function getWpdb(): wpdb
    {
        /** @var wpdb */
        global $wpdb;
        return $wpdb;
    }

    public static function getI18n(): array
    {
        global $i18n;
        return $i18n;
    }

    public static function trans(string $trans): string
    {
        return __($trans, Kernel::APP_NAME);
    }

    public static function getPost(): ?WP_Post
    {
        global $post;
        return $post;
    }
}
