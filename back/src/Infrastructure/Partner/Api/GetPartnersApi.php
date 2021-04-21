<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Api;

use App\Infrastructure\Partner\Partner;
use App\Infrastructure\Partner\PartnerFormatter;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Post;

class GetPartnersApi extends AbstractApiController
{

    public function __construct(private PartnerFormatter $formatter, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): mixed
    {
        $query = $this->wordpressMiddleware->wpQuery([
            'post_type' => Partner::POST_TYPE_NAME,
            'limit' => 3
        ]);

        return array_map(fn(WP_Post $post) => $this->formatter->format($post), $query->get_posts());
    }

    public function getEndPoint(): string
    {
        return 'partners';
    }
}
