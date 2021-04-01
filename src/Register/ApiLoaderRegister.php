<?php

declare(strict_types=1);

namespace App\Register;

use App\Api\AbstractApiController;
use Exception;

class ApiLoaderRegister
{
    /**
     * @var AbstractApiController[]
     */
    private array $apis;

    public function makeRegister(): void
    {
        foreach ($this->apis as $api) {
            try {
                $this->addRouting($api);
            } catch (Exception $e) {
                continue;
            }
        }
    }

    public function addApi(AbstractApiController $api): void
    {
        $this->apis [] = $api;
    }

    private function addRouting(AbstractApiController $api): void
    {
        register_rest_route(
            $api->getNamespace(),
            $api->getEndPoint(),
            [
                'methods' => $api->getMethod(),
                'callback' => [$api, 'init'],
                'body' => $api->getBody(),
                'blocking' => $api->isBlocking(),
                'permission_callback' => fn() => $api->getProtectedCallBack(),
            ]
        );
    }
}
