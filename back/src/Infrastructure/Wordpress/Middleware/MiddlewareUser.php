<?php

namespace App\Infrastructure\Wordpress\Middleware;

class MiddlewareUser
{

    private int $id;
    private string $displayName;
    private string $niceName;
    private string $email;
    private array $roles;

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
