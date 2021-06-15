<?php

declare(strict_types=1);

namespace App\Infrastructure\Formatter;

class HelperFormatter
{
    public static function keysToCamel(array $data): array
    {
        foreach ($data as $k => $v) {
            if (is_object($v)) {
                foreach ($v as $key => $val) {
                    $keyCamelCase = ucwords(str_replace('_', ' ', $key));
                    $keyCamelCase = str_replace(' ', '', lcfirst($keyCamelCase));
                    $tmp[$keyCamelCase] = $val;
                    $data[$k] = $tmp;
                }
            }
            if (is_array($v)) {
                foreach ($v as $key => $val) {
                    $keyCamelCase = ucwords(str_replace('_', ' ', $key));
                    $keyCamelCase = str_replace(' ', '', lcfirst($keyCamelCase));
                    $tmp[$keyCamelCase] = $val;
                    $data[$k] = $tmp;
                }
            }
        }

        return $data;
    }
}
