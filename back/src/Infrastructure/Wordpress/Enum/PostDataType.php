<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Enum;

/**
 * @method static MetaType PRICE()
 * @method static MetaType THUMBNAIL()
 */
class PostDataType extends WordpressType
{
    public const POST_AUTHOR = 'post_author';
}