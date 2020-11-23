<?php

declare(strict_types=1);

use App\Action\AddAssets;
use App\Action\ApiLoaderAction;
use App\Action\PostTypeSeller;
use App\Action\RegisterElementorWidget;
use App\Action\WordpressFeatureAction;
use App\Api\MenuApi;
use App\Api\PostByIdApi;
use App\Api\PostSlugApi;
use App\Api\RoutingApi;
use App\Api\TranslationApi;
use App\Elementor\Widgets\TestWidget;
use App\Model\Config;

return [
    Config::API => [
        PostSlugApi::class,
        MenuApi::class,
        PostByIdApi::class,
        PostSlugApi::class,
        TranslationApi::class,
    ],
    Config::ACTION => [
        RegisterElementorWidget::class,
        ApiLoaderAction::class,
        WordpressFeatureAction::class,
        PostTypeSeller::class,
        AddAssets::class,
    ],
    Config::ELEMENTOR_WIDGETS => [
        TestWidget::class,
    ]
];
