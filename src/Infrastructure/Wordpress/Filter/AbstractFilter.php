<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\\Filter;

abstract class AbstractFilter
{
    abstract public function __invoke(): mixed;

    abstract public function getFilterName(): string;
}
