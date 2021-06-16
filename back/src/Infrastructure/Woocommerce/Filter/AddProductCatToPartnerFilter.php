<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Filter;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress\Filter\AbstractFilter;

class AddProductCatToPartnerFilter extends AbstractFilter
{

    public function __invoke(): mixed
    {
        $args = current(func_get_args());

        return [Partner::POST_TYPE_NAME, ...$args];
    }

    public static function getName(): string
    {
        return 'woocommerce_taxonomy_objects_product_cat';
    }
}
