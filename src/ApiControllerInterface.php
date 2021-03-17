<?php

declare(strict_types=1);

namespace App;

interface ApiControllerInterface
{
    public function getBody(): array;

    public function setBody(array $body): void;

    public function getMethod(): string;

    public function isBlocking(): bool;

    public function getEndPoint(): string;

    public function getNamespace(): string;

    public function getProtectedCallBack(): bool;
}
