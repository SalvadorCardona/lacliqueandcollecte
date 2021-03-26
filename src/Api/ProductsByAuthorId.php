<?php

declare(strict_types=1);

namespace App\Api;

use App\AbstractApiController;

class ProductsByAuthorId extends AbstractApiController
{
    public function __invoke(): array
    {
         $products = wc_get_products([
            'status'    => 'publish',
            'limit'     => -1,
            'author'    => (int) $this->request->get_param('id')
         ]);

        return array_map(fn($product) => $product->get_data(), $products);
    }

    public function getEndPoint(): string
    {
        return 'products/(?P<id>\d+)/by-author';
    }
}
