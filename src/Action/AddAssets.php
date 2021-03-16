<?php

declare(strict_types=1);

namespace App\Action;

use App\ActionInterface;
use App\Kernel;

class AddAssets implements ActionInterface
{

    public function __invoke(): void
    {

        if (!is_admin()) {
            wp_deregister_script('jquery');
            $manifest = json_decode(file_get_contents(Kernel::getDirPublic() . '/parcel-manifest.json'), true);

            wp_enqueue_style('app-css', get_home_url() . $manifest['styles/app.scss'], false, '1.1', 'all');
            wp_enqueue_script('app-js', get_home_url() . $manifest['src/app.ts'], [], 1.1, true);
        }
    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}
