<?php

declare(strict_types=1);

namespace App\Manager;

// TODO: I need Unit test
use App\Filter\AbstractFilter;

class FilterManager extends AbstractManager
{
    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractFilter;
    }
}
