<?php

namespace App\Infrastructure\Wordpress\Action;

class DisallowIndexingAction implements ActionInterface
{
    public function __invoke(): void
    {
	    if (defined('WP_ENV') && WP_ENV !== 'production' && !is_admin()) {
		    add_action('pre_option_blog_public', '__return_zero');
	    }

    }

    public static function getAction(): string
    {
        return 'rest_api_init';
    }
}
