<?php

declare(strict_types=1);

namespace App\Application;

use App\Infrastructure\Manager\MasterManager;
use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use Exception;
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

    public static function boot(): void
    {
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->useAutowiring(true);

        $containerBuilder->addDefinitions(require __DIR__ . '/config.php');

        try {
            $container = $containerBuilder->build();
        } catch (Exception $e) {
            // TODO: Append Log system here
            return;
        }

        $app = Bridge::create($container);

        self::setApp($app);

        /** @var MasterManager $masterManager */
        $masterManager = $app
            ->getContainer()
            ->get(MasterManager::class);

        $masterManager->build();
    }
}
