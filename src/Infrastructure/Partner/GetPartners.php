<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner;

use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class GetPartners extends AbstractApiController
{

    public function __construct(private PartnerFormatter $formatter, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): mixed
    {
        $partner = $this->wordpressMiddleware->getPost((int) $this->request->get_param('id'));

        if (!$partner || Partner::POST_TYPE_NAME !== $partner->post_type) {
            return $this->wordpressMiddleware->wpError('awesome_no_author', 'Invalid author', array('status' => 401));
        }

        return $this->formatter->format($partner);
    }

    public function getEndPoint(): string
    {
        return 'partner/(?P<id>\d+)';
    }
}
