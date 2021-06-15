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
        $partnerRequest->firstName = (string) $this->request->get_param('firstName');
        $partnerRequest->lastName = (string) $this->request->get_param('lastName');
        $partnerRequest->description = (string) $this->request->get_param('description');
        $partnerRequest->phone = (string) $this->request->get_param('phone');
        $partnerRequest->email = (string) $this->request->get_param('email');
        $partnerRequest->siretNumber = (string) $this->request->get_param('siretNumber');

        if ($user = $this->wordpressMiddleware->wpGetCurrentUser()) {
            $partnerRequest->email = $user->user_email;
        }

        // TODO : Ajouter au middleWare
        $idPost = wp_insert_post([
            'post_type' => PartnerRequest::POST_TYPE_NAME,
            'meta_input' => (array) $partnerRequest
        ]);

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
