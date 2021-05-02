<?php

declare(strict_types=1);

namespace App\Infrastructure\Formatter;

interface Formatter
{
    public function format(mixed $data): array;
}