<?php
declare(strict_types=1);


namespace App\Action;

interface ActionInterface
{
    public function __invoke(): void;
}
