<?php

declare(strict_types=1);

namespace App\Application;

use App\Infrastructure\Manager\MasterManager;
use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use DI\DependencyException;
use DI\NotFoundException;
use Exception;
use Slim\App;

class Kernel
{
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

        /** @var MasterManager $masterManager */
        $masterManager = $container->get(MasterManager::class);

        $masterManager->build();
    }
}
