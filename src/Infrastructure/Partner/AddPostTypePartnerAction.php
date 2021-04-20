<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner;

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
        register_post_type(Partner::POST_TYPE_NAME, [
            'label' => $this->wordpressMiddleware->trans('Partenaire'),
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['title'],
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
                Url::make($this->wordpressMiddleware->trans('Facebook'), Partner::FIELD_FACEBOOK),
                Url::make($this->wordpressMiddleware->trans('Twitter'), Partner::FIELD_TWITTER),
                Url::make($this->wordpressMiddleware->trans('Linkedin'), Partner::FIELD_LINKEDIN),
                Url::make($this->wordpressMiddleware->trans('TikTok'), Partner::FIELD_TIKTOK),
            ]
        ]);

        $args = [
            'label' => $this->wordpressMiddleware->trans('City'),
            'labels' => [
                'menu_name' => $this->wordpressMiddleware->trans('City'),
                'all_items' => $this->wordpressMiddleware->trans('All city'),
                'edit_item' => $this->wordpressMiddleware->trans('Edit city'),
                'view_item' => $this->wordpressMiddleware->trans('View city'),
                'update_item' => $this->wordpressMiddleware->trans('Update city'),
                'add_new_item' => $this->wordpressMiddleware->trans('Add new city'),
                'new_item' => $this->wordpressMiddleware->trans('New city'),
                'parent_item' => $this->wordpressMiddleware->trans('Parent city'),
                'parent_item_colon' => $this->wordpressMiddleware->trans('Parent city'),
                'search_items' => $this->wordpressMiddleware->trans('Search city'),
                'popular_items' => $this->wordpressMiddleware->trans('Popular city'),
                'separate_items_with_commas' => $this->wordpressMiddleware->trans('Separate city with commas'),
                'add_or_remove_items' => $this->wordpressMiddleware->trans('Add or remove city'),
                'choose_from_most_used' => $this->wordpressMiddleware->trans('Choose most used city'),
                'not_found' => $this->wordpressMiddleware->trans('No city found'),
                'name' => $this->wordpressMiddleware->trans('City'),
                'singular_name' => $this->wordpressMiddleware->trans('City'),
            ],
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_tagcloud' => true,
            'show_in_quick_edit' => true,
            'show_admin_column' => false,
            'show_in_rest' => true,
            'hierarchical' => true,
            'query_var' => true,
            'sort' => false,
            'rewrite_no_front' => false,
            'rewrite_hierarchical' => false,
            'rewrite' => true
        ];
        register_taxonomy('city', [Partner::POST_TYPE_NAME], $args);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
