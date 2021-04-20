<?php

use App\Infrastructure\Logger;
use App\Infrastructure\Manager\ActionManager;
use App\Infrastructure\Manager\ApiLoaderManager;
use App\Infrastructure\Manager\FilterManager;
use App\Infrastructure\Manager\MasterManager;
use App\Infrastructure\Partner\Api\GetPartnersApi;
use App\Infrastructure\Partner\Api\GetPartnerByIdApi;
use App\Infrastructure\Wordpress\Action\AddAssetsAction;
use App\Infrastructure\Wordpress\Action\LoadApiAction;
use App\Infrastructure\Wordpress\Action\WoocommerceSupportAction;
use App\Infrastructure\Wordpress\Action\WordpressThemeSupportAction;
use App\Infrastructure\Wordpress\Api\PostByIdApi;
use App\Infrastructure\Wordpress\Api\ProductsByAuthorIdApi;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use Psr\Container\ContainerInterface;

return [
    'app.name' => 'zartizana',
    'logger.name' => 'default_logger',
    'logger.file' => __DIR__ . '../../var/journal.log',
    'dir.public' => __DIR__ . '/../../web',
    'resourcesList' => [
        ActionManager::class,
        ApiLoaderManager::class,
        FilterManager::class,
        PostByIdApi::class,
        ProductsByAuthorIdApi::class,
        WordpressThemeSupportAction::class,
        AddAssetsAction::class,
        GetPartnersApi::class,
        GetPartnerByIdApi::class,
        WoocommerceSupportAction::class,
        LoadApiAction::class,
        GetPartnerByIdApi::class
    ],
    Logger::class => DI\factory(function (ContainerInterface $c) {
        return Logger::create($c->get('logger.name'), $c->get('logger.file'));
    }),
    MasterManager::class => DI\factory(function (ContainerInterface $c) {
        return new MasterManager($c, $c->get('resourcesList'));
    }),
    AddAssetsAction::class => DI\factory(function (ContainerInterface $c) {
        return new AddAssetsAction($c->get('dir.public'));
    }),
    WordpressMiddleware::class => DI\factory(function (ContainerInterface $c) {
        return new WordpressMiddleware($c->get('app.name'));
    }),
];
