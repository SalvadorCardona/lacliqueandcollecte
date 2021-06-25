<?php

declare(strict_types=1);

namespace App\Infrastructure\PartnerRequest\Action;

use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WordPlate\Acf\Fields\Email;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Location;

class AddPartnerRequestPostTypeAction implements ActionInterface
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        $this->wordpressMiddleware->registerPostType(PartnerRequest::POST_TYPE_NAME, [
            'label' => $this->wordpressMiddleware->trans('partner.request'),
            'public' => true,
            'menu_icon' => 'dashicons-admin-users',
            'supports' => ['custom-fields'],
            'show_in_rest' => false,
            'has_archive' => false,
        ]);

        $this->wordpressMiddleware->registerExtendedFieldGroup([
            'title' => $this->wordpressMiddleware->trans('partner.request'),
            'location' => [
                Location::if('post_type', PartnerRequest::POST_TYPE_NAME)
            ],
            'fields' => [
                Text::make($this->wordpressMiddleware->trans('firstName'), 'firstName'),
                Text::make($this->wordpressMiddleware->trans('lastName'), 'lastName'),
                Text::make($this->wordpressMiddleware->trans('phone'), 'phone'),
                Email::make($this->wordpressMiddleware->trans('email'), 'email'),
                Text::make($this->wordpressMiddleware->trans('siretNumber'), 'siretNumber'),
                Textarea::make($this->wordpressMiddleware->trans('description'), 'description'),
            ]
        ]);
    }

    public static function getName(): string
    {
        return 'init';
    }
}
