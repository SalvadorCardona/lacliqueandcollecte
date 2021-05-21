<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use Exception;

// TODO: I need Unit test
class ApiLoaderManager extends AbstractManager
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

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
        $this->wordpressMiddleware->registerRestRoute(
            $api->getNamespace(),
            $api->getEndPoint(),
            [
                'methods' => $api->getMethod(),
                'callback' => [$api, 'init'],
                'body' => $api->getBody(),
                'blocking' => $api->isBlocking(),
                'permission_callback' => fn() => $api->getProtectedCallBack(),
                'args' => $api->getArgs()
            ]
        );
    }

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractApiController;
    }
}
