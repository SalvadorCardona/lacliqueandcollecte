<?php

declare(strict_types=1);

namespace App\Infrastructure\Formatter;

abstract class Formatter
{
    abstract public function format(mixed $data): mixed;

    public function fromList(array $datas): array
    {
        if (!count($datas)) {
            return [];
        }

        return array_map(fn($data) => $this->format($data), $datas);
    }

    public function keysToCamel(array $arr): array
    {
        foreach ($arr as $k => $v) {
            if (is_object($v)) {
                foreach ($v as $key => $val) {
                    $keyCamelCase = ucwords(str_replace('_', ' ', $key));
                    $keyCamelCase = str_replace(' ', '', lcfirst($keyCamelCase));
                    $tmp[$keyCamelCase] = $val;
                    $arr[$k] = $tmp;
                }
            }
            if (is_array($v)) {
                foreach ($v as $key => $val) {
                    $keyCamelCase = ucwords(str_replace('_', ' ', $key));
                    $keyCamelCase = str_replace(' ', '', lcfirst($keyCamelCase));
                    $tmp[$keyCamelCase] = $val;
                    $arr[$k] = $tmp;
                }
            }
        }
        return $arr;
    }
}
