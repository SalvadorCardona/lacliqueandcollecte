<?php

declare(strict_types=1);

namespace App;

interface TaxonomyInterface
{
    public static function getTaxonomyName(): string;

    public function getObjectType(): array;

    public function getArguments(): array;
}
