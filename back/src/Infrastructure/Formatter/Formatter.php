<?php

declare(strict_types=1);

namespace App\Infrastructure\Formatter;

abstract class Formatter
{
    abstract public function format(mixed $data): mixed;

    public function fromList(array $datas): array
    {
        if (!count($datas)) {
            return [];
        }

        return array_map(fn($data) => $this->format($data), $datas);
    }
}
