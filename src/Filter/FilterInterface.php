<?php

declare(strict_types=1);

namespace App\Filter;

interface FilterInterface
{
    public function __invoke(): mixed;

    public function getFilterName(): string;
}
