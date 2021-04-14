<?php


namespace App\Register;

// TODO: I need Unit test
use Psr\Container\ContainerInterface;

class FactoryManager
{
    public function __construct(private ContainerInterface $container) {}

    public function build(): void
    {
        $a = $this->getAppClass();
        $a = array_filter(get_declared_classes(), function (string $className) {
            return str_contains($className, 'App');
        });
        $b = 'a';
    }

    public function getAppClass(): array
    {
        return get_declared_classes();
    }
}