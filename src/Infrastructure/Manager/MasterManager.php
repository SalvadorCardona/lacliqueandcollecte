<?php

declare(strict_types=1);

namespace App\Infrastructure\Manager;

// TODO: I need Unit test
use Psr\Container\ContainerInterface;

class MasterManager extends AbstractManager
{
    /**
     * @var AbstractManager[]
     */
    protected array $resources = [];

    /**
     * @param ContainerInterface $container
     * @param class-string[] $resourcesList
     */
    public function __construct(private ContainerInterface $container, private array $resourcesList)
    {
    }

    public function build(): void
    {
        foreach ($this->resourcesList as $resource) {
            $entity = $this->container->get($resource);
            $entitiesList [] = $entity;
            $this->addResourceTo($this, $entity);
        }

        foreach ($entitiesList as $entity) {
            foreach ($this->resources as $resource) {
                $this->addResourceTo($resource, $entity);
            }
        }
    }

    private function addResourceTo(AbstractManager $abstractManager, mixed $entity): void
    {
        if ($abstractManager->isAvailableResource($entity)) {
            $abstractManager->addResource($entity);
        }
    }

    public function isAvailableResource(mixed $entity): bool
    {
        return $entity instanceof AbstractManager;
    }
}
