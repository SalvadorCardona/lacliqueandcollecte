<?php

declare(strict_types=1);

namespace App;

interface ActionInterface
{
    public function __invoke(): void;

    public static function getAction(): string;
}
