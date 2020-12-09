<?php

declare(strict_types=1);


namespace App\Api;

class MenuApi extends AbstractApiController
{
    protected string $endPoint = 'menu';

    /**
     * @return array
     */
    public function __invoke(): array
    {
        return wp_get_nav_menu_items("Menu 1");
    }
}
