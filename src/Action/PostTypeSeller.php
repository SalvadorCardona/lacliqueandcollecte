<?php


namespace App\Action;


class PostTypeSeller implements ActionInterface
{

    public function __invoke(): void
    {
        register_post_type('bien', [
            'label' => 'Bien',
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['title', 'editor', 'thumbnail'],
            'show_in_rest' => true,
            'has_archive' => true,
        ]);
    }
}