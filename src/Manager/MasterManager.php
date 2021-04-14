<?php

declare(strict_types=1);

namespace App\Manager;

// TODO: I need Unit test
use App\Action\AddAssets;
use App\Action\WoocommerceSupport;
use App\Action\LoadApi;
use App\Action\AddPostTypePartner;
use App\Action\WordpressThemeSupport;
use App\Api\GetConfiguration;
use App\Api\PostByIdApi;
use App\Api\ProductsByAuthorId;
use Psr\Container\ContainerInterface;

class MasterManager extends AbstractManager
{
    /**
     * @var AbstractManager[]
     */
    protected array $resources = [];

    public function __construct(private ContainerInterface $container)
    {
    }

    public function build(array $resourcesAvailable): void
    {
        $entitiesList = [];

        foreach ($resourcesAvailable as $resource) {
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
