<?php

namespace App\Infrastructure\Wordpress\Middleware;

class MiddlewareUser
{

    public int $id;
    public string $displayName;
    public string $niceName;
    public string $email;
    public array $roles;

    public function __construct()
    {
    }



    public function initUser(int $id, string $displayName, string $niceName, string $email, array $roles): MiddlewareUser
    {
        $this->id = $id;
        $this->displayName = $displayName;
        $this->niceName = $niceName;
        $this->email = $email;
        $this->roles = $roles;
        return $this;
    }
}
