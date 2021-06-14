<?php

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Wordpress\Middleware\Entity\MiddlewareUser;
use WP_User;

class WpUserFormatter extends Formatter
{
    /**
     * @param WP_User $data
     */
    public function format($data): MiddlewareUser
    {
        return (new MiddlewareUser())
            ->setId($data->ID)
            ->setDisplayName($data->user_lastname)
            ->setEmail($data->user_email)
            ->setNiceName($data->user_nicename)
            ->setRoles($data->roles);
    }
}
