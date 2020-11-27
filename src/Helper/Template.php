<?php

declare(strict_types=1);

namespace App\Helper;

class Template
{
    public static function exist(string $key, array $container): bool
    {
        return array_key_exists($key, $container) && count($container[$key]);
    }

    public static function getValue(string $key, array $container): ?string
    {
        if (self::exist($key, $container)) {
            return $container[$key][0];
        }

        return null;
    }

    public static function print(string $key, array $container): void
    {
        if (self::exist($key, $container)) {
            echo self::getValue($key, $container);
        }
    }
}