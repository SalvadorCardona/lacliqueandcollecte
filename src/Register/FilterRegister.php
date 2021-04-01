<?php

declare(strict_types=1);

namespace App\Register;

use App\Action\ActionInterface;

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
