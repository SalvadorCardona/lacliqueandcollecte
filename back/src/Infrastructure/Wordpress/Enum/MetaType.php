<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Enum;

/**
 * @method static MetaType PRICE()
 * @method static MetaType THUMBNAIL()
 */
class MetaType extends WordpressType
{
    public const PRICE = '_price';
    public const THUMBNAIL = '_thumbnail_id';
}
