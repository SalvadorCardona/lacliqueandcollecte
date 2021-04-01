<?php
declare(strict_types=1);

use App\Action\AddAssets;
use App\Action\AddFilter;
use App\Action\LoadApi;
use App\Action\WordpressThemeSupport;
use App\Action\PostTypePartner;
use App\Api\GetConfiguration;
use App\Api\PostByIdApi;
use App\Api\ProductsByAuthorId;
use App\Model\Config;

return [
    Config::API => [
        PostByIdApi::class,
        ProductsByAuthorId::class,
        GetConfiguration::class
    ],
    Config::ACTION => [
        WordpressThemeSupport::class,
        AddAssets::class,
        PostTypePartner::class,
        AddFilter::class,
        LoadApi::class
    ],
    Config::FILTER => [
    ]
];
