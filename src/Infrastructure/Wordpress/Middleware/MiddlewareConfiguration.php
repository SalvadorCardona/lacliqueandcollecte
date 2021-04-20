<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware;

use WP_User;

class MiddlewareConfiguration
{
    public string $wcStoreApi;

    public string $logoUrl;

    public string $siteUrl;

    public array $mainMenu;

    public ?WP_User $user;

    public string $wpApiKey;

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

    /**
     * @param WP_User|null $user
     * @return MiddlewareConfiguration
     */
    public function setUser(?WP_User $user): MiddlewareConfiguration
    {
        $this->user = $user;
        return $this;
    }

    /**
     * @param string $wpApiKey
     * @return MiddlewareConfiguration
     */
    public function setWpApiKey(string $wpApiKey): MiddlewareConfiguration
    {
        $this->wpApiKey = $wpApiKey;
        return $this;
    }
}
