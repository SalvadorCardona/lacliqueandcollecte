<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

use App\Infrastructure\Wordpress\Action\ActionInterface;

class ActionManager extends AbstractManager
{
    public function addResource(mixed $resource): void
    {
        /** @var ActionInterface $resource */
        $this->resources [] = $resource;

        add_action($resource::getAction(), $resource, 1000);
    }

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof ActionInterface;
    }
}