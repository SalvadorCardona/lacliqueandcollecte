<?php

declare(strict_types=1);

namespace App\Action;

use App\ActionInterface;
use App\ApiControllerInterface;
use Exception;

class ApiLoaderAction implements ActionInterface
{
    /**
     * @var ApiControllerInterface[]
     */
    private array $apis;

    public function addApi(ApiControllerInterface $api): void
    {
        $this->apis []= $api;
    }

    public function __invoke(): void
    {
        foreach ($this->apis as $api) {
            try {
                $this->addRouting($api);
            } catch (Exception $e) {
                continue;
            }
        }
    }

    private function addRouting(ApiControllerInterface $api): void
    {
//        register_rest_route(
//            $api->getNamespace(),
//            $api->getEndPoint(),
//            [
//            'methods' => $api->getMethod(),
//            'callback' => [$api, 'init'],
//            'body' => $api->getBody(),
//            'blocking' => $api->isBlocking()
//            ]
//        );
    }

    public static function getAction(): string
    {
        return 'rest_api_init';
    }
}
