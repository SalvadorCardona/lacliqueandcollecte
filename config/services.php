<?php
declare(strict_types=1);

use App\Action\ActionInterface;
use App\Action\ApiLoaderAction;
use App\Elementor\WidgetsRegister;
use App\Model\Config;
use App\Routing\CompositeRoutingContext;
use App\Service\ActionService;
use DI\ContainerBuilder;
use Psr\Container\ContainerInterface;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        ActionService::class => function (ContainerInterface $container) {
            $actionService = new ActionService();

            foreach ($container->get(Config::ACTION) as $action) {
                $actionService->addAction($container->get($action));
            }

            return $actionService;
        },

        ApiLoaderAction::class => function (ContainerInterface $container) {
            $apiLoaderAction = new ApiLoaderAction();

            foreach ($container->get(Config::API) as $api) {
                $apiLoaderAction->addApi($container->get($api));
            }

            return $apiLoaderAction;
        },

        CompositeRoutingContext::class => function (ContainerInterface $container) {
            $compositeRoutingContext = new CompositeRoutingContext();

            foreach ($container->get(Config::ROUTING_CONTEXT) as $routingContext) {
                $compositeRoutingContext->addRoutingContext($container->get($routingContext));
            }

            return $compositeRoutingContext;
        },

        WidgetsRegister::class => function (ContainerInterface $container) {
            $widgetsRegister = WidgetsRegister::getInstance();

            foreach ($container->get(Config::ELEMENTOR_WIDGETS) as $widget) {
                dump($widget);
                $widgetsRegister->addWidget($container->get($widget));
            }

            return $widgetsRegister;
        },
    ]);
};
