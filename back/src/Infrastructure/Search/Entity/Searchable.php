<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\Entity;

class Searchable
{
    public int $id;
    public string $name;
    public array $searchableItems = [];
}
