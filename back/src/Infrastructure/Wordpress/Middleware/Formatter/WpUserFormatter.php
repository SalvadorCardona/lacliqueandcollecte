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
    ) {
    }

    /**
     * @param WP_User $data
     *
     **/
    public function format($data): mixed
    {
        $user = new MiddlewareUser();
        return $user->initUser($data->ID, $data->user_lastname, $data->user_nicename, $data->user_email, $data->roles);
    }
}
