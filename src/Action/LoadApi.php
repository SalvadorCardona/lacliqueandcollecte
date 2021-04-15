<?php

namespace App\Action;

use App\Manager\ApiLoaderManager;

class LoadApi implements ActionInterface
{
    public function __construct(private ApiLoaderManager $apiLoaderRegister)
    {
    }

    public function __invoke(): void
    {
        $this->apiLoaderRegister->makeRegister();
    }

    public static function getAction(): string
    {
        return 'rest_api_init';
    }
}
