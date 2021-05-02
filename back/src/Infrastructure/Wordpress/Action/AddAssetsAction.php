<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Wordpress\Middleware\MiddlewareConfigurationFactory;

class AddAssetsAction implements ActionInterface
{
    /**
     * AddAssetsAction constructor.
     */
    public function __construct(private string $publicDir, private MiddlewareConfigurationFactory $middlewareConfigurationFactory)
    {
    }

    public function __invoke(): void
    {
        if (!is_admin()) {
            wp_deregister_script('jquery');
            $manifest = json_decode(file_get_contents($this->publicDir . '/parcel-manifest.json'), true);

            wp_enqueue_style('app-css', get_home_url() . $manifest['styles/app.scss'], [], '1', 'all');
            wp_enqueue_script('app-js', get_home_url() . $manifest['src/app.ts'], [], '1', true);
            wp_localize_script(
                'app-js',
                'middlewareConfiguration',
                (array) $this->middlewareConfigurationFactory->format()
            );
        }
    }

    public static function getAction(): string
    {
        return 'wp_enqueue_scripts';
    }
}
