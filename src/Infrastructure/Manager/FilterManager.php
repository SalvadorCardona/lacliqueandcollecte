<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

// TODO: I need Unit test


use App\Infrastructure\Wordpress\AbstractFilter;

class FilterManager extends AbstractManager
{
    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractFilter;
    }
}
