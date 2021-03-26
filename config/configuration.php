<?php
declare(strict_types=1);

use App\Action\AddAssets;
use App\Action\AddFilter;
use App\Action\WordpressThemeSupport;
use App\Action\PostTypePartner;
use App\Api\GetConfiguration;
use App\Api\PostByIdApi;
use App\Api\ProductsByAuthorId;
use App\Filter\WooCommerceSupport;
use App\Model\Config;
use App\Service\ApiLoaderRegister;

return [
    Config::API => [
        PostByIdApi::class,
        ProductsByAuthorId::class,
        GetConfiguration::class
    ],
    Config::ACTION => [
        ApiLoaderRegister::class,
        WordpressThemeSupport::class,
        AddAssets::class,
        PostTypePartner::class,
        AddFilter::class,
    ],
    Config::FILTER => [
        WooCommerceSupport::class
    ]
];
