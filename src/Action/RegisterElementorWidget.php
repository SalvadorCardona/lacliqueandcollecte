<?php

declare(strict_types=1);


namespace App\Action;

use App\ActionInterface;
use App\Elementor\WidgetsRegister;
use App\Kernel;

class RegisterElementorWidget implements ActionInterface
{

    public function __invoke(): void
    {
        $widgetRegister = Kernel::getAPP()->getContainer()->get(WidgetsRegister::class);
        add_action('elementor/widgets/widgets_registered', [ $widgetRegister, 'registerWidget' ]);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
