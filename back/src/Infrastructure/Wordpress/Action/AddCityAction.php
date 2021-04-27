<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Action;

use App\Infrastructure\Partner\Partner;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class AddCityAction implements ActionInterface
{
    /**
     * AddCityAction constructor.
     */
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {
        $args = [
            'label' => $this->wordpressMiddleware->trans('City'),
            'labels' => [
                'menu_name' => $this->wordpressMiddleware->trans('City'),
                'all_items' => $this->wordpressMiddleware->trans('All city'),
                'edit_item' => $this->wordpressMiddleware->trans('Edit city'),
                'view_item' => $this->wordpressMiddleware->trans('View city'),
                'update_item' => $this->wordpressMiddleware->trans('Update city'),
                'add_new_item' => $this->wordpressMiddleware->trans('Add new city'),
                'new_item' => $this->wordpressMiddleware->trans('New city'),
                'parent_item' => $this->wordpressMiddleware->trans('Parent city'),
                'parent_item_colon' => $this->wordpressMiddleware->trans('Parent city'),
                'search_items' => $this->wordpressMiddleware->trans('Search city'),
                'popular_items' => $this->wordpressMiddleware->trans('Popular city'),
                'separate_items_with_commas' => $this->wordpressMiddleware->trans('Separate city with commas'),
                'add_or_remove_items' => $this->wordpressMiddleware->trans('Add or remove city'),
                'choose_from_most_used' => $this->wordpressMiddleware->trans('Choose most used city'),
                'not_found' => $this->wordpressMiddleware->trans('No city found'),
                'name' => $this->wordpressMiddleware->trans('City'),
                'singular_name' => $this->wordpressMiddleware->trans('City'),
            ],
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_tagcloud' => true,
            'show_in_quick_edit' => true,
            'show_admin_column' => false,
            'show_in_rest' => true,
            'hierarchical' => true,
            'query_var' => true,
            'sort' => false,
            'rewrite_no_front' => false,
            'rewrite_hierarchical' => false,
            'rewrite' => true
        ];

        $this->wordpressMiddleware->registerTaxonomy('city', [Partner::POST_TYPE_NAME, 'product'], $args);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
