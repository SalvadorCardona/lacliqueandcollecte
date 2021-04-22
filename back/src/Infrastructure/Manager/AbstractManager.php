<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

abstract class AbstractManager
{
    protected array $resources = [];

    abstract public function isAvailableResource(mixed $entity): bool;

    public function addResource(mixed $resource): void
    {
        $this->resources [] = $resource;
    }
}
