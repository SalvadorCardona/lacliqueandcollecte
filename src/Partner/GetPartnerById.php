<?php

declare(strict_types=1);

namespace App\Partner;

use App\Api\AbstractApiController;
use WP_Error;

class GetPartnerById extends AbstractApiController
{
    public function __construct(private PartnerFormatter $formatter)
    {
    }

    public function __invoke(): mixed
    {
        $partnerId = $this->request->get_param('id');
        $partner = get_post($partnerId);

        if (!$partner || Partner::POST_TYPE_NAME !== $partner->post_type) {
            return new WP_Error('awesome_no_author', 'Invalid author', array( 'status' => 401 ));
        }

        return $this->formatter->format(get_post_meta($partnerId));
    }

    public function getEndPoint(): string
    {
        return 'partner/(?P<id>\d+)';
    }
}
