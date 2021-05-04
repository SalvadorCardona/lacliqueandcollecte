<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Api;

use App\Infrastructure\Partner\Formatter\PartnerFormatter;
use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Post;

class GetPartnersApi extends AbstractApiController
{

    public function __construct(private PartnerFormatter $formatter, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): HttpResponse
    {
        $query = $this->wordpressMiddleware->wpQuery([
            'post_type' => Partner::POST_TYPE_NAME,
            'limit' => 3
        ]);

        return $this->response(array_map(fn(WP_Post $post) => $this->formatter->format($post), $query->get_posts()));
    }

    public function getEndPoint(): string
    {
        return 'partners';
    }
}
