<?php

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;

class WpTranslateFormatter extends Formatter
{
    public function format($data): array
    {
        $translations = [];
        foreach ($data as $key => $trans) {
            $translations[$key] = current($trans->translations);
        }

        return $translations;
    }
}
