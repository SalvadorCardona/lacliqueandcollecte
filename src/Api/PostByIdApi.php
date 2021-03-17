<?php

namespace App\Api;

use App\AbstractApiController;
use App\Helper\WordpressHelper;

class PostByIdApi extends AbstractApiController
{
    protected string $endPoint = 'post/(?P<id>\d+)/all';

    public function __invoke(): ?array
    {
        $wpdb = WordpressHelper::getWpdb();

        $post = (int) $wpdb->get_var($wpdb->prepare("
                SELECT ID FROM $wpdb->posts WHERE id = %d", $this->request->get_param('id')));
        if ($post) {
            return get_post($post, 'ARRAY_A');
        }

        return null;
    }
}
