<?php
declare(strict_types=1);

use App\Action\AddAssets;
use App\Action\WordpressThemeSupport;
use App\Action\PostTypePartner;
use App\Api\PostByIdApi;
use App\Api\ProductByAuthorId;
use App\Elementor\Widgets\TestWidget;
use App\Filter\WooCommerceSupport;
use App\Model\Config;
use App\Service\ElementorWidgetRegister;
use App\Service\ApiLoaderRegister;

return [
    Config::API => [
        PostByIdApi::class,
        ProductByAuthorId::class
    ],
    Config::ACTION => [
        ElementorWidgetRegister::class,
        ApiLoaderRegister::class,
        WordpressThemeSupport::class,
        AddAssets::class,
        PostTypePartner::class
    ],
    Config::ELEMENTOR_WIDGETS => [
        TestWidget::class,
    ],
    Config::FILTER => [
        WooCommerceSupport::class
    ]
];
