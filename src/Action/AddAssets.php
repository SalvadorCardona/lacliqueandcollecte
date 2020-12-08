<?php

declare(strict_types=1);

namespace App\Action;

class AddAssets implements ActionInterface
{

    public function __invoke(): void
    {
        $manifest = json_decode(file_get_contents(get_template_directory() . '/dist/parcel-manifest.json'), true);

        wp_enqueue_style('app-css', get_stylesheet_directory_uri() . '/dist/' . $manifest['styles/app.scss'], false, '1.1', 'all');
        wp_enqueue_script('app-js', get_stylesheet_directory_uri() . '/dist/'. $manifest['src/app.ts'], [], 1.1, true);
    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}
