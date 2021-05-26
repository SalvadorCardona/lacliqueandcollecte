<?php

namespace App\Infrastructure\Wordpress\Middleware\Entity;

class MiddlewareUser
{

    public int $id;
    public string $displayName;
    public string $niceName;
    public string $email;
    public array $roles;

    public function setId(int $id): MiddlewareUser
    {
        $this->id = $id;
        return $this;
    }

    public function setDisplayName(string $displayName): MiddlewareUser
    {
        $this->displayName = $displayName;
        return $this;
    }

    public function setNiceName(string $niceName): MiddlewareUser
    {
        $this->niceName = $niceName;
        return $this;
    }

    public function setEmail(string $email): MiddlewareUser
    {
        $this->email = $email;
        return $this;
    }

    public function setRoles(array $roles): MiddlewareUser
    {
        $this->roles = $roles;
        return $this;
    }
}
