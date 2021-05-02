<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

class MiddlewareConfiguration
{
    public string $wcStoreApi;

    public string $siteUrl;

    public array $mainMenu;

    public ?array $user;

    public string $wpApiKey;

    public array $wpQuery;

    public function getWcStoreApi(): string
    {
        return $this->wcStoreApi;
    }

    public function setWcStoreApi(string $wcStoreApi): MiddlewareConfiguration
    {
        $this->wcStoreApi = $wcStoreApi;
        return $this;
    }

    public function getSiteUrl(): string
    {
        return $this->siteUrl;
    }

    public function setSiteUrl(string $siteUrl): MiddlewareConfiguration
    {
        $this->siteUrl = $siteUrl;
        return $this;
    }

    public function setMainMenu(array $mainMenu): MiddlewareConfiguration
    {
        $this->mainMenu = $mainMenu;
        return $this;
    }

    public function setUser(array $user): MiddlewareConfiguration
    {
        $this->user = $user;
        return $this;
    }

    public function setWpApiKey(string $wpApiKey): MiddlewareConfiguration
    {
        $this->wpApiKey = $wpApiKey;
        return $this;
    }

    public function getWpQuery(): ?array
    {
        return $this->wpQuery;
    }

    public function setWpQuery(array $wpQuery): MiddlewareConfiguration
    {
        $this->wpQuery = $wpQuery;
        return $this;
    }
}
