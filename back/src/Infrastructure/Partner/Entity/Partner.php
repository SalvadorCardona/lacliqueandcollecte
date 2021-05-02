<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Entity;

use App\Infrastructure\Wordpress\Enum\TaxonomyType;

class Partner
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
    public const FIELD_INSTAGRAM = 'instagram';

    public const META_LIST = [
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
        self::FIELD_INSTAGRAM
    ];

    public const TAXONOMY_LIST = [
        TaxonomyType::CITY
    ];
}
