<?php

declare(strict_types=1);

namespace App\Action;


class AddAssets implements ActionInterface
{

    public function __invoke(): void
    {
        wp_enqueue_style( 'app-css', get_stylesheet_directory_uri() . '/dist/app.css',false,'1.1','all');
        wp_enqueue_script( 'app-js', get_stylesheet_directory_uri() . '/dist/app.js', [], 1.1, true);

    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}