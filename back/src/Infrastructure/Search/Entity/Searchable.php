<?php
declare(strict_types=1);

namespace App\Infrastructure\Search\Entity;

class Searchable
{
    public string $label;
    public string $name;
    public string $type;
    public array $searchableItems = [];
}

