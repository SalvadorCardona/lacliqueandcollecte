<?php

namespace App\Action;

use App\Register\ApiLoaderRegister;

class LoadApi implements ActionInterface
{

    public function __construct(private ApiLoaderRegister $apiLoaderRegister) {}

    public function __invoke(): void
    {
        $this->apiLoaderRegister->makeRegister();
    }

    public static function getAction(): string
    {
        return 'rest_api_init';
    }
}
