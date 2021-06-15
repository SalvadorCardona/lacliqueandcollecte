<?php

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Formatter\HelperFormatter;

class WpMenuFormatter extends Formatter
{
    /**
     * @param array $data
     */
    public function format($data): array
    {
        return HelperFormatter::keysToCamel($data);
    }
}
