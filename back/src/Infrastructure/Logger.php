<?php

declare(strict_types=1);

namespace App\Infrastructure;

use Monolog\Formatter\LineFormatter;
use Monolog\Handler\StreamHandler;
use Monolog\Logger as LoggerBase;

class Logger extends LoggerBase
{
    public static function create(string $loggerName, string $loggerFile): self
    {
        $dateFormat = "Y n j, g:i a";
        $output = "%datetime% > %level_name% > %message% %context% %extra%\n";
        $formatter = new LineFormatter($output, $dateFormat);
        $stream = new StreamHandler($loggerFile, LoggerBase::WARNING);
        $stream->setFormatter($formatter);
        $logger = new Logger($loggerName);
        $logger->pushHandler($stream);

        return $logger;
    }
}
