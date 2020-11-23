<?php


namespace App\Action;


use App\Elementor\WidgetsRegister;

class RegisterElementorWidget implements ActionInterface
{

    public function __invoke(): void
    {
        WidgetsRegister::getInstance();
    }

    public static function getAction(): string
    {
        return 'init';
    }
}