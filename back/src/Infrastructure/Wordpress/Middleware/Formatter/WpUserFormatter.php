<?php

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Wordpress\Middleware\MiddlewareUser;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_User;

class WpUserFormatter extends Formatter
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private MiddlewareUser $user
    ) {
    }

    /**
     * @param WP_User $data
     *
     **/
    public function format($data): mixed
    {
        if (!$data instanceof WP_User) {
            return [];
        }
        return ['ID' => $data->ID, 'displayName' => $data->display_name, 'niceName' => $data->user_nicename, 'email' => $data->user_email, 'roles' => $data->roles];

//        return $this->user->initUser($data->ID, $data->user_lastname, $data->user_nicename, $data->user_email, $data->roles);
    }
}
