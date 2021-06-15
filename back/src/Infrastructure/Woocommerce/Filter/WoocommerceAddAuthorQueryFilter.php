<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Filter;

use App\Infrastructure\Wordpress\Filter\AbstractFilter;

class WoocommerceAddAuthorQueryFilter extends AbstractFilter
{

    public function __invoke(): mixed
    {
        $args = func_get_args()[0];
        $request = func_get_args()[1];

        if (isset($request['author'])) {
            $args['author'] = $request['author'];
        }

        return $args;
    }

    public static function getName(): string
    {
        return 'woocommerce_rest_product_object_query';
    }
}
