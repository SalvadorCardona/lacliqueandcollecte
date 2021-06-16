<?php

declare(strict_types=1);

namespace App\Infrastructure\PartnerRequest\Action;

use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Location;

class AddPartnerRequestPostType implements ActionInterface
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        $this->wordpressMiddleware->registerPostType(PartnerRequest::POST_TYPE_NAME, [
            'label' => $this->wordpressMiddleware->trans('partner.request'),
            'public' => true,
            'menu_position' => 3,
            'menu_icon' => 'dashicons-building',
            'supports' => [],
            'show_in_rest' => false,
            'has_archive' => false,
        ]);

        $this->wordpressMiddleware->registerExtendedFieldGroup([
            'title' => $this->wordpressMiddleware->trans('Partner Request'),
            'location' => [
                Location::if('post_type', PartnerRequest::POST_TYPE_NAME)
            ],
            'fields' => [
                Tab::make($this->wordpressMiddleware->trans('Partner Request'))->placement('left'),
                Text::make($this->wordpressMiddleware->trans('firstName'), 'firstName'),
                Text::make($this->wordpressMiddleware->trans('lastName'), 'lastName'),
                Text::make($this->wordpressMiddleware->trans('phone'), 'phone'),
                Text::make($this->wordpressMiddleware->trans('email'), 'email'),
                Text::make($this->wordpressMiddleware->trans('siretNumber'), 'siretNumber'),
                Text::make($this->wordpressMiddleware->trans('description'), 'description'),
            ]
        ]);
    }

    public static function getName(): string
    {
        return 'init';
    }
}
