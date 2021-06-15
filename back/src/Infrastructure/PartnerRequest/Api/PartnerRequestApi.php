<?php

namespace App\Infrastructure\PartnerRequest\Api;

use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;
use App\Infrastructure\Wordpress\Middleware\Formatter\WpUserFormatter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PartnerRequestApi extends AbstractApiController
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware, private wpUserFormatter $wpUserFormatter)
    {
    }

    public function __invoke(): HttpResponse
    {
        $partnerRequest = new PartnerRequest();
        $request = $this->request->get_param('request');
        $partnerRequest->firstName = (string)$this->request->get_param('firstName');
        $partnerRequest->lastName = (string)$this->request->get_param('lastName');
        $partnerRequest->description = (string)$this->request->get_param('description');
        $partnerRequest->phone = (string)$this->request->get_param('phone');
        $partnerRequest->email = (string)$this->request->get_param('email');
        $partnerRequest->siretNumber = (string)$this->request->get_param('siretNumber');


        if ($this->wordpressMiddleware->wpGetCurrentUser()->ID !== 0) {
            $user = $this->wpUserFormatter->format($this->wordpressMiddleware->wpGetCurrentUser());
            $partnerRequest->firstName = $user->displayName;
            $partnerRequest->lastName = 'last';
        } else {
            $partnerRequest->firstName = 'camille';
            $partnerRequest->lastName = 'last21';

            $mailSend = $this->wordpressMiddleware->wpMail('association.zartisana@gmail.com', 'New partner', json_encode($partnerRequest), null, null);
//          TODO:invert true and false
            if ($mailSend === true) {
                return $this->response('Error when sending email. Please try again.', 400);
            }

        }
        return $this->response(json_encode($partnerRequest), 200);
    }

    public function getEndPoint(): string
    {
        return 'partner-request';
    }

    public function getMethod(): string
    {
        return 'POST';
    }

    public function getArgs(): array
    {
        return [
            'firstName' => [
                'required' => true,
                'type' => 'string',
            ],
            'lastName' => [
                'required' => true,
                'type' => 'string',
            ],
            'description' => [
                'required' => true,
                'type' => 'string',
            ],
            'phone' => [
                'required' => false,
                'type' => 'string',
            ],
            'email' => [
                'required' => true,
                'type' => 'string',
            ],
            'siretNumber' => [
                'required' => true,
                'type' => 'string',
            ]
        ];
    }

    public function getBody(): array
    {
        return ['1'];
    }
}
