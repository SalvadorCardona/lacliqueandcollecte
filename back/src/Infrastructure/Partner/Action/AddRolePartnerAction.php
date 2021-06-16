<?php

declare(strict_types=1);

namespace App\Infrastructure\Partner\Action;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class AddRolePartnerAction implements ActionInterface
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        $this->wordpressMiddleware->addRole(
            Partner::POST_TYPE_NAME,
            Partner::POST_TYPE_NAME,
            ['publish_posts' => true, 'read' => true, 'edit_posts' => true]
        );
    }

    public static function getName(): string
    {
        return 'init';
    }
}
