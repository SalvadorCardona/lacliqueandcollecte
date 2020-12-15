<?php

namespace App\Api;

use App\AbstractApiController;

class ProductByAuthorId extends AbstractApiController
{
    protected string $endPoint = 'product/(?P<id>\d+)/all';

    public function __invoke(): array
    {
         $products = wc_get_products([
            'status'    => 'publish',
            'limit'     => -1,
            'author'    => (int) $this->request->get_param('id')
        ]);

        return array_map(fn($product) => $product->get_data(), $products);
    }
}