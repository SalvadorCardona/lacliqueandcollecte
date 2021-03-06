<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Api;

use WP_REST_Request;

abstract class AbstractApiController
{
    protected array $body = [];
    protected string $method = 'GET';
    protected bool $blocking = true;
    protected string $endPoint = '';
    protected string $namespace = 'wp/app';
    protected ?WP_REST_Request $request;

    public function init(WP_REST_Request $request = null)
    {
        $this->request = $request;
        return $this->__invoke();
    }

    abstract public function __invoke(): HttpResponse;

    abstract public function getEndPoint(): string;

    protected function response(mixed $data = null, int $status = 200, array $header = []): HttpResponse
    {
        return new HttpResponse($data, $status, $header);
    }

    /**
     * @return array
     */
    public function getBody(): array
    {
        return $this->body;
    }

    public function setBody(array $body): void
    {
        $this->body = $body;
    }

    public function getMethod(): string
    {
        return $this->method;
    }

    public function isBlocking(): bool
    {
        return $this->blocking;
    }

    public function getNamespace(): string
    {
        return $this->namespace;
    }

    public function getProtectedCallBack(): bool
    {
        return true;
    }

    public function getArgs(): array
    {
        return [];
    }
}
