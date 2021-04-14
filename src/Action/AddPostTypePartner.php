<?php

declare(strict_types=1);

namespace App\Action;

use App\Helper\WordpressHelper as WH;
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
    public const POST_TYPE_NAME = 'partner';
    public const FIELD_LAST_NAME = 'lastName';
    public const FIELD_FIRST_NAME = 'firstName';
    public const FIELD_FACE_PICTURE = 'facePicture';
    public const FIELD_SHOP_NAME = 'shopName';
    public const FIELD_SHOP_DESCRIPTION = 'shopDescription';
    public const FIELD_SHOP_PICTURE = 'shopPicture';
    public const FIELD_EMAIL = 'email';
    public const FIELD_PHONE = 'phone';
    public const FIELD_CITY = 'city';
    public const FIELD_STREET = 'street';
    public const FIELD_CITY_CODE = 'cityCode';
    public const FIELD_FACEBOOK = 'facebook';
    public const FIELD_TWITTER = 'twitter';
    public const FIELD_LINKEDIN = 'linkedin';
    public const FIELD_TIKTOK = 'tiktok';

    public const FIELD_LIST = [
        self::POST_TYPE_NAME,
        self::FIELD_LAST_NAME,
        self::FIELD_FIRST_NAME,
        self::FIELD_FACE_PICTURE,
        self::FIELD_SHOP_NAME,
        self::FIELD_SHOP_DESCRIPTION,
        self::FIELD_SHOP_PICTURE,
        self::FIELD_EMAIL,
        self::FIELD_PHONE,
        self::FIELD_CITY,
        self::FIELD_STREET,
        self::FIELD_CITY_CODE,
        self::FIELD_FACEBOOK,
        self::FIELD_TWITTER,
        self::FIELD_LINKEDIN,
        self::FIELD_TIKTOK,
    ];

    public function __invoke(): void
    {
        register_post_type(self::POST_TYPE_NAME, [
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
                Location::if('post_type', self::POST_TYPE_NAME)
            ],
            'fields'   => [
                Tab::make(WH::trans('Partenaire'))->placement('left'),
                Text::make(WH::trans('Nom'), self::FIELD_LAST_NAME)->required(),
                Text::make(WH::trans('Prenom'), self::FIELD_FIRST_NAME)->required(),
                Image::make(WH::trans('Photo de profile'), self::FIELD_FACE_PICTURE),
                Tab::make(WH::trans('Boutique')),
                Text::make(WH::trans('Nom de la boutique'), self::FIELD_SHOP_NAME)->required(),
                Textarea::make(WH::trans('Description de la boutique'), self::FIELD_SHOP_DESCRIPTION)->required(),
                Image::make(WH::trans('Photo de la boutique'), self::FIELD_SHOP_PICTURE),
                Tab::make(WH::trans('Contact')),
                Email::make(WH::trans('Email'), self::FIELD_EMAIL),
                Text::make(WH::trans('Téléphone'), self::FIELD_PHONE),
                Text::make(WH::trans('Ville'), self::FIELD_CITY),
                Text::make(WH::trans('Rue'), self::FIELD_STREET),
                Text::make(WH::trans('Code postal'), self::FIELD_CITY_CODE),
                Tab::make(WH::trans('Social')),
                Url::make(WH::trans('Facebook'), self::FIELD_FACEBOOK),
                Url::make(WH::trans('Twitter'), self::FIELD_TWITTER),
                Url::make(WH::trans('Linkedin'), self::FIELD_LINKEDIN),
                Url::make(WH::trans('TikTok'), self::FIELD_TIKTOK),
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
        register_taxonomy('city', [ self::POST_TYPE_NAME ], $args);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
