<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner;

use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Error;

class GetPartnerById extends AbstractApiController
{
    public function __construct(private PartnerFormatter $formatter, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): mixed
    {
        $partnerId = $this->request->get_param('id');
        $partner = get_post($partnerId);

        if (!$partner || Partner::POST_TYPE_NAME !== $partner->post_type) {
            return $this->wordpressMiddleware->wpError('awesome_no_author', 'Invalid author', array('status' => 401));
        }

        return $this->formatter->format(get_post_meta($partnerId));
    }

    public function getEndPoint(): string
    {
        return 'partner/(?P<id>\d+)';
    }
}
