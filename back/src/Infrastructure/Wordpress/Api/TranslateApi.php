<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Api;

class TranslateApi extends AbstractApiController
{
    public function __invoke(): HttpResponse
    {
        return $this->response(get_translations_for_domain('default'));
    }

    public function getEndPoint(): string
    {
        return 'translate';
    }
}
