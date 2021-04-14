<?php

declare(strict_types=1);

namespace App\Manager;

use App\Api\AbstractApiController;
use Exception;

// TODO: I need Unit test
class ApiLoaderManager extends AbstractManager
{
    public function makeRegister(): void
    {
        foreach ($this->resources as $api) {
            try {
                $this->addRouting($api);
            } catch (Exception $e) {
                continue;
            }
        }
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

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractApiController;
    }
}
