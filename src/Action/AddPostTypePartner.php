<?php

declare(strict_types=1);

namespace App\Action;

use App\Helper\WordpressHelper as WH;
use App\Partner\Partner;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Email;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Url;
use WordPlate\Acf\Location;

// TODO: I need to separated
class AddPostTypePartner implements ActionInterface
{
    public function __invoke(): void
    {
        register_post_type(Partner::POST_TYPE_NAME, [
            'label' => WH::trans('Partenaire'),
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['*'],
            'show_in_rest' => true,
            'has_archive' => false,
        ]);

        register_extended_field_group([
            'title'    => WH::trans('Notre Partenaire'),
            'location' => [
                Location::if('post_type', Partner::POST_TYPE_NAME)
            ],
            'fields'   => [
                Tab::make(WH::trans('Partenaire'))->placement('left'),
                Text::make(WH::trans('Nom'), Partner::FIELD_LAST_NAME)->required(),
                Text::make(WH::trans('Prenom'), Partner::FIELD_FIRST_NAME)->required(),
                Image::make(WH::trans('Photo de profile'), Partner::FIELD_FACE_PICTURE),
                Tab::make(WH::trans('Boutique')),
                Text::make(WH::trans('Nom de la boutique'), Partner::FIELD_SHOP_NAME)->required(),
                Textarea::make(WH::trans('Description de la boutique'), Partner::FIELD_SHOP_DESCRIPTION)->required(),
                Image::make(WH::trans('Photo de la boutique'), Partner::FIELD_SHOP_PICTURE),
                Tab::make(WH::trans('Contact')),
                Email::make(WH::trans('Email'), Partner::FIELD_EMAIL),
                Text::make(WH::trans('Téléphone'), Partner::FIELD_PHONE),
                Text::make(WH::trans('Ville'), Partner::FIELD_CITY),
                Text::make(WH::trans('Rue'), Partner::FIELD_STREET),
                Text::make(WH::trans('Code postal'), Partner::FIELD_CITY_CODE),
                Tab::make(WH::trans('Social')),
                Url::make(WH::trans('Facebook'), Partner::FIELD_FACEBOOK),
                Url::make(WH::trans('Twitter'), Partner::FIELD_TWITTER),
                Url::make(WH::trans('Linkedin'), Partner::FIELD_LINKEDIN),
                Url::make(WH::trans('TikTok'), Partner::FIELD_TIKTOK),
            ]
        ]);

        $args = [
            'label'  => WH::trans('City'),
            'labels' => [
                'menu_name'                  => WH::trans('City'),
                'all_items'                  => WH::trans('All city'),
                'edit_item'                  => WH::trans('Edit city'),
                'view_item'                  => WH::trans('View city'),
                'update_item'                => WH::trans('Update city'),
                'add_new_item'               => WH::trans('Add new city'),
                'new_item'                   => WH::trans('New city'),
                'parent_item'                => WH::trans('Parent city'),
                'parent_item_colon'          => WH::trans('Parent city'),
                'search_items'               => WH::trans('Search city'),
                'popular_items'              => WH::trans('Popular city'),
                'separate_items_with_commas' => WH::trans('Separate city with commas'),
                'add_or_remove_items'        => WH::trans('Add or remove city'),
                'choose_from_most_used'      => WH::trans('Choose most used city'),
                'not_found'                  => WH::trans('No city found'),
                'name'                       => WH::trans('City'),
                'singular_name'              => WH::trans('City'),
            ],
            'public'               => true,
            'show_ui'              => true,
            'show_in_menu'         => true,
            'show_in_nav_menus'    => true,
            'show_tagcloud'        => true,
            'show_in_quick_edit'   => true,
            'show_admin_column'    => false,
            'show_in_rest'         => true,
            'hierarchical'         => true,
            'query_var'            => true,
            'sort'                 => false,
            'rewrite_no_front'     => false,
            'rewrite_hierarchical' => false,
            'rewrite' => true
        ];
        register_taxonomy('city', [ Partner::POST_TYPE_NAME ], $args);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
