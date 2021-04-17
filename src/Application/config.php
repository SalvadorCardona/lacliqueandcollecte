<?php

use App\Infrastructure\Logger;
use App\Kernel;
use Psr\Container\ContainerInterface;

return [
    'logger.name' => 'default_logger',
    'logger.file' => Kernel::getDirVar() . '/journals.log',
    Logger::class => DI\factory(function (ContainerInterface $c) {
        return Logger::create($c->get('logger.name'), $c->get('logger.file'));
    }),
];
