<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Action;

use App\Infrastructure\Partner\Partner;
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WordPlate\Acf\Fields\Email;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Url;
use WordPlate\Acf\Location;

// TODO: I need to separated
class AddPostTypePartnerAction implements ActionInterface
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        add_role(
            Partner::POST_TYPE_NAME,
            Partner::POST_TYPE_NAME,
            ['publish_posts' => true, 'read' => true, 'edit_posts' => true]
        );

        add_filter('wp_dropdown_users_args', function ($query_args, $r) {
            global $post;

            if ($post->post_type === Partner::POST_TYPE_NAME || $post->post_type === 'product') {
                $query_args['who'] = '';
                $query_args['role__in'] = [Partner::POST_TYPE_NAME, 'administrator'];
            }

            return $query_args;
        }, 10, 2);

        register_post_type(Partner::POST_TYPE_NAME, [
            'label' => $this->wordpressMiddleware->trans('Partenaire'),
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['title', 'author'],
            'show_in_rest' => true,
            'has_archive' => false,
        ]);

        register_extended_field_group([
            'title' => $this->wordpressMiddleware->trans('Notre Partenaire'),
            'location' => [
                Location::if('post_type', Partner::POST_TYPE_NAME)
            ],
            'fields' => [
                Tab::make($this->wordpressMiddleware->trans('Partenaire'))->placement('left'),
                Text::make($this->wordpressMiddleware->trans('Nom'), Partner::FIELD_LAST_NAME)->required(),
                Text::make($this->wordpressMiddleware->trans('Prenom'), Partner::FIELD_FIRST_NAME)->required(),
                Image::make($this->wordpressMiddleware->trans('Photo de profile'), Partner::FIELD_FACE_PICTURE),
                Tab::make($this->wordpressMiddleware->trans('Boutique')),
                Text::make($this->wordpressMiddleware->trans('Nom de la boutique'), Partner::FIELD_SHOP_NAME)->required(),
                Textarea::make($this->wordpressMiddleware->trans('Description de la boutique'), Partner::FIELD_SHOP_DESCRIPTION)->required(),
                Image::make($this->wordpressMiddleware->trans('Photo de la boutique'), Partner::FIELD_SHOP_PICTURE),
                Tab::make($this->wordpressMiddleware->trans('Contact')),
                Email::make($this->wordpressMiddleware->trans('Email'), Partner::FIELD_EMAIL),
                Text::make($this->wordpressMiddleware->trans('Téléphone'), Partner::FIELD_PHONE),
                Text::make($this->wordpressMiddleware->trans('Ville'), Partner::FIELD_CITY),
                Text::make($this->wordpressMiddleware->trans('Rue'), Partner::FIELD_STREET),
                Text::make($this->wordpressMiddleware->trans('Code postal'), Partner::FIELD_CITY_CODE),
                Tab::make($this->wordpressMiddleware->trans('Social')),
                Url::make($this->wordpressMiddleware->trans('Instagram'), Partner::FIELD_INSTAGRAM),
                Url::make($this->wordpressMiddleware->trans('Facebook'), Partner::FIELD_FACEBOOK),
                Url::make($this->wordpressMiddleware->trans('Twitter'), Partner::FIELD_TWITTER),
                Url::make($this->wordpressMiddleware->trans('Linkedin'), Partner::FIELD_LINKEDIN),
                Url::make($this->wordpressMiddleware->trans('TikTok'), Partner::FIELD_TIKTOK),
            ]
        ]);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
