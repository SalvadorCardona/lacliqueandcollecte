<?php


namespace App\Filter;


use App\FilterInterface;

class WooCommerceSupport implements FilterInterface
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