<?php

namespace App\Filter;

class WooCommerceSupport extends AbstractFilter
{

    public function __invoke(): mixed
    {
        // TODO: Implement __invoke() method.
    }

    public function getFilterName(): string
    {
        return 'woocommerce_product_data_store_cpt_get_products_query';
    }
}
