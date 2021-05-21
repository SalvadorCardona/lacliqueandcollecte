<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Wordpress\Middleware\MiddlewareConfigurationFactory;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class AddAssetsAction implements ActionInterface
{

/**
     * AddAssetsAction constructor.
     */
    public function __construct(private string $publicDir, private MiddlewareConfigurationFactory $middlewareConfigurationFactory, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        if (!is_admin()) {
            $manifest = json_decode(file_get_contents($this->publicDir . '/parcel-manifest.json'), true);

            $this->wordpressMiddleware->wpEnqueueStyle('app-css', get_home_url() . $manifest['styles/app.scss'], [], '1', 'all');
            $this->wordpressMiddleware->wpEnqueueScript('app-js', get_home_url() . $manifest['src/app.ts'], [], '1', true);
            $this->wordpressMiddleware->wpLocalizeScript(
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
