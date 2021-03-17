<?php

namespace App\Api;

use App\AbstractApiController;

class ProductsByAuthorId extends AbstractApiController
{
    protected string $endPoint = 'products/(?P<id>\d+)/by-author';

    protected function __invoke(): array
    {
        global $woocommerce;

         $products = wc_get_products([
            'status'    => 'publish',
            'limit'     => -1,
            'author'    => (int) $this->request->get_param('id')
         ]);

        return array_map(fn($product) => $product->get_data(), $products);
    }
}
