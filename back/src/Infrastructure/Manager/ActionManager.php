<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class ActionManager extends AbstractManager
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }
    public function addResource(mixed $resource): void
    {
        /** @var ActionInterface $resource */
        $this->resources [] = $resource;

        $this->wordpressMiddleware->addAction($resource::getAction(), $resource, 1000);
    }

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof ActionInterface;
    }
}
