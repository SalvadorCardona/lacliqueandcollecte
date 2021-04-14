<?php

declare(strict_types=1);

namespace App;

use App\Action\AddAssets;
use App\Action\WoocommerceSupport;
use App\Action\LoadApi;
use App\Action\AddPostTypePartner;
use App\Action\WordpressThemeSupport;
use App\Partner\GetPartnerById;
use App\Api\PostByIdApi;
use App\Api\ProductsByAuthorId;
use App\Manager\ActionManager;
use App\Manager\ApiLoaderManager;
use App\Manager\FactoryManager;
use App\Manager\FilterManager;
use App\Manager\MasterManager;
use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use Exception;
use Slim\App;

class Kernel
{
    public const APP_NAME = 'zartizana';

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

        try {
            $container = $containerBuilder->build();
        } catch (Exception $e) {
            // TODO: Append Log system here
            return;
        }

        $app = Bridge::create($container);

        self::setApp($app);

        /** @var MasterManager $masterManager */
        $masterManager = self::getApp()
            ->getContainer()
            ->get(MasterManager::class);

        $masterManager->build(self::getResourcesAvailable());
    }

    public static function getResourcesAvailable(): array
    {
        return [
            ActionManager::class,
            ApiLoaderManager::class,
            FactoryManager::class,
            FilterManager::class,
            PostByIdApi::class,
            ProductsByAuthorId::class,
            WordpressThemeSupport::class,
            AddAssets::class,
            AddPostTypePartner::class,
            WoocommerceSupport::class,
            LoadApi::class,
            GetPartnerById::class
        ];
    }
}
