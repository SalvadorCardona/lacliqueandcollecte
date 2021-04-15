<?php

declare(strict_types=1);

namespace App\Manager;

use App\Action\ActionInterface;

// TODO: I need Unit test
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
