<?php
declare(strict_types=1);

use App\Action\ApiLoaderRegister;
use App\Elementor\WidgetsRegister;
use App\Model\Config;
use App\Service\ActionRegister;
use DI\ContainerBuilder;
use Psr\Container\ContainerInterface;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        ActionRegister::class => function (ContainerInterface $container) {
            $actionService = new ActionRegister();

            foreach ($container->get(Config::ACTION) as $action) {
                $actionService->addAction($container->get($action));
            }

            return $actionService;
        },

        ApiLoaderRegister::class => function (ContainerInterface $container) {
            $apiLoaderAction = new ApiLoaderRegister();

            foreach ($container->get(Config::API) as $api) {
                $apiLoaderAction->addApi($container->get($api));
            }

            return $apiLoaderAction;
        },

        WidgetsRegister::class => function (ContainerInterface $container) {
            $widgetsRegister = new WidgetsRegister();

            foreach ($container->get(Config::ELEMENTOR_WIDGETS) as $widget) {
                $widgetsRegister->addWidget($container->get($widget));
            }

            return $widgetsRegister;
        },
    ]);
};
