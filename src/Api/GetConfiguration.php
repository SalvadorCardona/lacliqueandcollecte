<?php

declare(strict_types=1);

namespace App\Api;

use App\Util\MiddlewareConfigurationFactory;

class GetConfiguration extends AbstractApiController
{
    public function __invoke(): ?array
    {
        return (array) MiddlewareConfigurationFactory::build();
    }

    public function getEndPoint(): string
    {
        return 'configuration';
    }
}
