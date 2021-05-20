<?php

use App\Infrastructure\Logger;
use App\Infrastructure\Manager\ActionManager;
use App\Infrastructure\Manager\ApiLoaderManager;
use App\Infrastructure\Manager\FilterManager;
use App\Infrastructure\Manager\ResourcesLoader;
use App\Infrastructure\Partner\Action\AddPostTypePartnerAction;
use App\Infrastructure\Partner\Api\GetPartnerByIdApi;
use App\Infrastructure\Partner\Api\GetPartnersApi;
use App\Infrastructure\Search\Api\SearchApi;
use App\Infrastructure\Woocommerce\Action\WoocommerceSupportAction;
use App\Infrastructure\Wordpress\Action\AddAssetsAction;
use App\Infrastructure\Wordpress\Action\AddCityAction;
use App\Infrastructure\Wordpress\Action\LoadApiAction;
use App\Infrastructure\Wordpress\Action\WordpressThemeSupportAction;
use App\Infrastructure\Wordpress\Middleware\MiddlewareConfigurationFactory;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use App\Infrastructure\Wordpress\Action\DisableAssetsWordpress;
use Psr\Container\ContainerInterface;

return [
    'app.name' => 'zartizana',
    'logger.name' => 'default_logger',
    'logger.file' => __DIR__ . '../../var/journal.log',
    'dir.public' => __DIR__ . '/../../web',
    'publicDir' => __DIR__ . '/../../web',
    'resourcesList' => [
        ActionManager::class,
        ApiLoaderManager::class,
        FilterManager::class,
        WordpressThemeSupportAction::class,
        AddAssetsAction::class,
        GetPartnersApi::class,
        GetPartnerByIdApi::class,
        WoocommerceSupportAction::class,
        LoadApiAction::class,
        GetPartnerByIdApi::class,
        AddPostTypePartnerAction::class,
        SearchApi::class,
        AddCityAction::class,
        DisableAssetsWordpress::class
    ],
    Logger::class => DI\factory(function (ContainerInterface $c) {
        return Logger::create($c->get('logger.name'), $c->get('logger.file'));
    }),
    ResourcesLoader::class => DI\factory(function (ContainerInterface $c) {
        return new ResourcesLoader($c, $c->get('resourcesList'));
    }),
    AddAssetsAction::class => DI\factory(function (ContainerInterface $c) {
        return new AddAssetsAction($c->get('dir.public'), $c->get(MiddlewareConfigurationFactory::class), new WordpressMiddleware());
    })
];
