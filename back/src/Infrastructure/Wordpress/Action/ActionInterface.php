<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

interface ActionInterface
{
    public function __invoke(): void;

    public static function getName(): string;
}
