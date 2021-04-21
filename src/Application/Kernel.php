<?php

declare(strict_types=1);

namespace App\Application;

use App\Infrastructure\Manager\MasterManager;
use DI\ContainerBuilder;
use Exception;

class Kernel
{
    public static function boot(): void
    {
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->useAutowiring(true);

        $containerBuilder->addDefinitions(require __DIR__ . '/config.php');

        try {
            $container = $containerBuilder->build();
            /** @var MasterManager $masterManager */
            $masterManager = $container->get(MasterManager::class);
        } catch (Exception $e) {
            // TODO: Append Log system here
            return;
        }

        $masterManager->build();
    }
}
