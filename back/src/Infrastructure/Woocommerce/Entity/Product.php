<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Entity;

use App\Infrastructure\Wordpress\Enum\MetaType;
use App\Infrastructure\Wordpress\Enum\TaxonomyType;

class Product
{
    public const POST_TYPE_NAME = 'product';

    public const META_LIST = [
        MetaType::PRICE,
        MetaType::THUMBNAIL
    ];

    public const TAXONOMY_LIST = [
        TaxonomyType::CITY,
        TaxonomyType::PRODUCT_CAT,
    ];
}
