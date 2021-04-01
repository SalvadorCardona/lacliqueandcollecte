<?php

declare(strict_types=1);

namespace App;

use App\Register\ActionRegister;
use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use Exception;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Slim\App;

class Kernel
{
    /**
     * @var App;
     */
    private static App $App;

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

    public static function getDirPublic(): string
    {
        return __DIR__ . './../web';
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
            // TODO: Append Log system here
            return;
        }

        $app = Bridge::create($container);

        self::setApp($app);

        try {
            /** @var ActionRegister $actionRegister */
            $actionRegister = self::getApp()
                ->getContainer()
                ->get(ActionRegister::class);
        } catch (Exception $e) {
            return;
        }

        $actionRegister->registerActions();
    }
}
