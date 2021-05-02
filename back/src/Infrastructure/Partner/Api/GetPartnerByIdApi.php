<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Api;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Partner\Formatter\PartnerFormatter;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class GetPartnerByIdApi extends AbstractApiController
{

    public function __construct(private PartnerFormatter $formatter, private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): HttpResponse
    {
        $partner = $this->wordpressMiddleware->getPost((int) $this->request->get_param('id'));

        if (!$partner || Partner::POST_TYPE_NAME !== $partner->post_type) {
            return $this->response('awesome_no_author: Invalid author', 401);
        }

        return $this->response($this->formatter->format($partner));
    }

    public function getEndPoint(): string
    {
        return 'partner/(?P<id>\d+)';
    }
}
