<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Api;

use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostByIdApi extends AbstractApiController
{
    /**
     * PostByIdApi constructor.
     */
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): ?array
    {
        $wpdb = $this->wordpressMiddleware->getWpdb();

        $post = (int) $wpdb->get_var($wpdb->prepare("
                SELECT ID FROM $wpdb->posts WHERE id = %d", $this->request->get_param('id')));
        if ($post) {
            return get_post($post, 'ARRAY_A');
        }

        return null;
    }

    public function getEndPoint(): string
    {
        return 'post/(?P<id>\d+)/all';
    }
}
