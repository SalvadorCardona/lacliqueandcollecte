<?php

declare(strict_types=1);

namespace App;

use App\Service\ActionRegister;
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
    private static function setApp(App $App): void
    {
        self::$App = $App;
    }

    public static function getDirConfig(): string
    {
        return __DIR__ . './../config';
    }

    public static function boot(): void
    {
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->useAutowiring(true);

        $containerBuilder->addDefinitions(require self::getDirConfig() . '/configuration.php');

        $services = require self::getDirConfig() . '/services.php';
        $services($containerBuilder);

        try {
            $container = $containerBuilder->build();
        } catch (Exception $e) {
        }

        $app = Bridge::create($container);

        self::setApp($app);

        /** @var ActionRegister $eventService */
        $eventService = self::getApp()
            ->getContainer()
            ->get(ActionRegister::class);

        $eventService->registerActions();
    }

}
