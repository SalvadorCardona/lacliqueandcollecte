<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware\Entity;

class MiddlewareConfiguration
{
    public string $wcStoreApi;

    public string $siteUrl;

    public array $mainMenu;

    public ?MiddlewareUser $user;

    public string $wpApiKey;

    public MiddlewareWPQuery $wpQuery;

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

    public function setUser(MiddlewareUser $user): MiddlewareConfiguration
    {
        $this->user = $user;
        return $this;
    }

    public function setWpApiKey(string $wpApiKey): MiddlewareConfiguration
    {
        $this->wpApiKey = $wpApiKey;
        return $this;
    }

    public function getWpQuery(): ?MiddlewareWPQuery
    {
        return $this->wpQuery;
    }

    public function setWpQuery(MiddlewareWPQuery $wpQuery): MiddlewareConfiguration
    {
        $this->wpQuery = $wpQuery;
        return $this;
    }
}
