<?php

namespace App\Infrastructure\PartnerRequest\Api;

use App\Infrastructure\Logger;
use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;
use App\Infrastructure\PartnerRequest\Validator\PartnerRequestValidator;
use App\Infrastructure\Wordpress\Api\AbstractApiController;
use App\Infrastructure\Wordpress\Api\HttpResponse;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PartnerRequestApi extends AbstractApiController
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
        private Logger $logger,
        private PartnerRequestValidator $partnerRequestValidator,
    )
    {
    }

    public function __invoke(): HttpResponse
    {
        $partnerRequest = new PartnerRequest();
        $partnerRequest->firstName = (string)$this->request->get_param('firstName');
        $partnerRequest->lastName = (string)$this->request->get_param('lastName');
        $partnerRequest->description = (string)$this->request->get_param('description');
        $partnerRequest->phone = (string)$this->request->get_param('phone');
        $partnerRequest->email = (string)$this->request->get_param('email');
        $partnerRequest->siretNumber = (string)$this->request->get_param('siretNumber');

        $user = $this->wordpressMiddleware->wpGetCurrentUser();

        if ($user->ID !== 0) {
            $partnerRequest->email = $user->user_email;
        }
        if ($errors = $this->partnerRequestValidator->validator($partnerRequest)) {
            return $this->response($errors, 400);
        }

        $mailSend = $this->wordpressMiddleware->wpMail('asso@zartizana.com', 'New partner !', json_encode($partnerRequest), array('Content-Type: text/html; charset=UTF-8', 'From: My Site Name <support@example.com>'), null);

        if ($mailSend === false) {
            $this->logger->error("Partner request has not sent email");
        }
        // TODO : Ajouter au middleWare
        $idPost = wp_insert_post([
            'post_type' => PartnerRequest::POST_TYPE_NAME,
            'meta_input' => (array)$partnerRequest
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
}
