<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Enum;

/**
 * @method static TaxonomyType CATEGORIES()
 * @method static TaxonomyType PRODUCT_CAT()
 * @method static TaxonomyType CITY()
 */
class TaxonomyType extends WordpressType
{
    public const CATEGORIES = 'categories';
    public const PRODUCT_CAT = 'product_cat';
    public const CITY = 'city';
}
