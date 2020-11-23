<?php


namespace App\Action;


use App\Elementor\WidgetsRegister;

class PostTypeSeller implements ActionInterface
{
    const name = 'seller';

    public function __invoke(): void
    {
        register_post_type(self::name, [
            'label' => 'Commerçant',
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['title', 'editor', 'thumbnail'],
            'show_in_rest' => true,
            'has_archive' => true,
        ]);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}