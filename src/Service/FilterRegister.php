<?php

namespace App\Service;

use App\ActionInterface;

class FilterRegister implements ActionInterface
{

    public function __invoke(): void
    {
        // TODO: Implement __invoke() method.
    }

    public static function getAction(): string
    {
        return 'after_setup_theme';
    }
}
