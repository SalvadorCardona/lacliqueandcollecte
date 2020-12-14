<?php

declare(strict_types=1);

namespace App;

use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use Exception;
use Slim\App;

class Kernel
{
    /**
     * @var App;
     */
    private static $App;

    /**
     * @return App
     */
    public static function getApp(): App
    {
        return self::$App;
    }

    /**
     * @param App $App
     */
    private function setApp(App $App): void
    {
        self::$App = $App;
    }

    public static function boot(): void
    {
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->useAutowiring(true);

        $containerBuilder->addDefinitions(require  './../config/configuration.php');

        $services = require __DIR__ . '/services.php';
        $services($containerBuilder);

        try {
            $container = $containerBuilder->build();
        } catch (Exception $e) {
        }

        $app = Bridge::create($container);

        self::setApp($app);
    }
}
