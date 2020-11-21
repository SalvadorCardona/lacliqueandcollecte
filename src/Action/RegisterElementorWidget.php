<?php


namespace App\Action;


use App\Elementor\Widgets;

class RegisterElementorWidget implements ActionInterface
{

    public function __invoke(): void
    {
        Widgets::get_instance();
    }

    public static function getAction(): string
    {
        return 'init';
    }
}