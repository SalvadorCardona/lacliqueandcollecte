<?php

namespace App\Infrastructure\PartnerRequest\Api;

use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;

class PartnerRequestApi extends AbstractApiController
{

    public function __invoke(): HttpResponse
    {
        $request = $this->request->get_param('request');
        $partnerRequest = new PartnerRequest();
//

        return $this->response($request, 200);
    }

    public function getEndPoint(): string
    {
        return 'partner-request';
    }
}
