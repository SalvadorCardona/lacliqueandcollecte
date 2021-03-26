<?php

declare(strict_types=1);

namespace App\Model;

class MiddlewareConfiguration
{
    public string $wcStoreApi;

    public string $logoUrl;

    public string $siteUrl;

    public array $mainMenu;

    public function getWcStoreApi(): string
    {
        return $this->wcStoreApi;
    }

    public function setWcStoreApi(string $wcStoreApi): MiddlewareConfiguration
    {
        $this->wcStoreApi = $wcStoreApi;
        return $this;
    }

    public function getLogoUrl(): string
    {
        return $this->logoUrl;
    }

    public function setLogoUrl(string $logoUrl): MiddlewareConfiguration
    {
        $this->logoUrl = $logoUrl;
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
}
