<?php

declare(strict_types=1);

namespace App\Action;

use App\Helper\WordpressHelper;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Email;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Url;
use WordPlate\Acf\Location;

class PostTypeSeller implements ActionInterface
{
    const POST_TYPE_NAME = 'seller';

    const FIELD_LAST_NAME = 'lastName';
    const FIELD_FIRST_NAME = 'firstName';
    const FIELD_FACE_PICTURE = 'facePicture';
    const FIELD_SHOP_NAME = 'shopName';
    const FIELD_SHOP_DESCRIPTION = 'shopDescription';
    const FIELD_SHOP_PICTURE = 'shopPicture';
    const FIELD_EMAIL = 'email';
    const FIELD_PHONE = 'phone';
    const FIELD_CITY = 'city';
    const FIELD_STREET = 'street';
    const FIELD_CITY_CODE = 'cityCode';
    const FIELD_FACEBOOK = 'facebook';
    const FIELD_TWITTER = 'twitter';
    const FIELD_LINKEDIN = 'linkedin';
    const FIELD_TIKTOK = 'tiktok';

    public function __invoke(): void
    {
        register_post_type(self::POST_TYPE_NAME, [
            'label' => WordpressHelper::trans('Partenaire'),
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => ['title', 'editor', 'thumbnail'],
            'show_in_rest' => true,
            'has_archive' => false,
        ]);

        register_extended_field_group([
            'title'    => WordpressHelper::trans('Notre Partenaire'),
            'location' => [
                Location::if('post_type', self::POST_TYPE_NAME)
            ],
            'fields'   => [
                Tab::make(WordpressHelper::trans('Partenaire'))->placement('left'),
                Text::make(WordpressHelper::trans('Nom'), self::FIELD_LAST_NAME)->required(),
                Text::make(WordpressHelper::trans('Prenom'), self::FIELD_FIRST_NAME)->required(),
                Image::make(WordpressHelper::trans('Photo de profile'), self::FIELD_FACE_PICTURE),
                Tab::make(WordpressHelper::trans('Boutique')),
                Text::make(WordpressHelper::trans('Nom de la boutique'), self::FIELD_SHOP_NAME)->required(),
                Textarea::make(WordpressHelper::trans('Description de la boutique'), self::FIELD_SHOP_DESCRIPTION)->required(),
                Image::make(WordpressHelper::trans('Photo de la boutique'), self::FIELD_SHOP_PICTURE),
                Tab::make(WordpressHelper::trans('Contact')),
                Email::make(WordpressHelper::trans('Email'), self::FIELD_EMAIL),
                Text::make(WordpressHelper::trans('Téléphone'), self::FIELD_PHONE),
                Text::make(WordpressHelper::trans('Ville'), self::FIELD_CITY),
                Text::make(WordpressHelper::trans('Rue'), self::FIELD_STREET),
                Text::make(WordpressHelper::trans('Code postal'), self::FIELD_CITY_CODE),
                Tab::make(WordpressHelper::trans('Social')),
                Url::make(WordpressHelper::trans('Facebook'), self::FIELD_FACEBOOK),
                Url::make(WordpressHelper::trans('Twitter'), self::FIELD_TWITTER),
                Url::make(WordpressHelper::trans('Linkedin'), self::FIELD_LINKEDIN),
                Url::make(WordpressHelper::trans('TikTok'), self::FIELD_TIKTOK),
            ]
        ]);

    }

    public static function getAction(): string
    {
        return 'init';
    }
}