<?php

declare(strict_types=1);

namespace App\Action;

use App\ActionInterface;

class WordpressFeatureAction implements ActionInterface
{

    public function __invoke(): void
    {
        add_theme_support('post-thumbnails');

        add_theme_support('title-tag');

        register_nav_menus([
            'navigation' => __('Navigation', 'wordplate'),
        ]);
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
