<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

// TODO: I need Unit test
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Filter\AbstractFilter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class FilterManager extends AbstractManager
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractFilter;
    }

    public function addResource(mixed $resource): void
    {
        /** @var ActionInterface $resource */
        $this->resources [] = $resource;

        $this->wordpressMiddleware->addFilter($resource::getName(), $resource, 1000);
    }
}
