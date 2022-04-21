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
//            $manifest = json_decode(file_get_contents($this->publicDir . '/parcel-manifest.json'), true);
//
//            $this->wordpressMiddleware->wpEnqueueStyle('app-css', $this->wordpressMiddleware->getHomeUrl() . $manifest['styles/app.scss'], [], '1', 'all');
//            $this->wordpressMiddleware->wpEnqueueScript('app-js', $this->wordpressMiddleware->getHomeUrl() . $manifest['src/app.ts'], [], '1', true);
//            $this->wordpressMiddleware->wpAddInlineScript('app-js', 'const main = document.getElementsByClassName("site-main"); main[0].innerHTML="<app-router>";', 'before');
//            $this->wordpressMiddleware->wpLocalizeScript('app-js', 'middlewareConfiguration', (array)$this->middlewareConfigurationFactory->format());
        }
    }

    public static function getName(): string
    {
        return 'wp_enqueue_scripts';
    }
}
