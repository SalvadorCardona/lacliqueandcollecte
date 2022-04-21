<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Wordpress\Middleware\MiddlewareConfigurationFactory;

class PrintJsAction implements ActionInterface
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
            $manifest = json_decode(file_get_contents($this->publicDir . '/parcel-manifest.json'), true);


            $appCss = file_get_contents($this->publicDir . $manifest['styles/app.scss']);
            $appJs = file_get_contents($this->publicDir . $manifest['src/app.ts']);
            $middlewareConfiguration = json_encode($this->middlewareConfigurationFactory->format());

            echo <<<HTML
			<script>var middlewareConfiguration = {$middlewareConfiguration}</script>
			<script>{$appJs}</script>
			<style>{$appCss}</style>
			HTML;
        }
    }

    public static function getName(): string
    {
        return 'print_js';
    }
}
