<?php

declare(strict_types=1);

use App\Action\AddAssets;
use App\Action\ApiLoaderAction;
use App\Action\RegisterElementorWidget;
use App\Action\WordpressFeatureAction;
use App\Action\PostTypePartner;
use App\Api\PostByIdApi;
use App\Elementor\Widgets\TestWidget;
use App\Model\Config;

return [
    Config::API => [
        PostByIdApi::class,
    ],
    Config::ACTION => [
        RegisterElementorWidget::class,
        ApiLoaderAction::class,
        WordpressFeatureAction::class,
        AddAssets::class,
        PostTypePartner::class
    ],
    Config::ELEMENTOR_WIDGETS => [
        TestWidget::class,
    ]
];
