<?php

namespace App\Infrastructure\Woocommerce\Action;

use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress;
use App\Infrastructure\Wordpress\Action\ActionInterface;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_User;

class WoocommerceSupportAction implements ActionInterface
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): void
    {

        /**
         * Disable Woocommerce style for product page
         */
        if (strpos($_SERVER['REQUEST_URI'], 'produit')) {
            $this->wordpressMiddleware->addFilter('woocommerce_enqueue_styles', '__return_empty_array');
            $this->wordpressMiddleware->addFilter('woocommerce_enqueue_scripts', '__return_empty_array');
        }

        /**
         * Used for that Woocommerce use index.php and not single-product.php
         */
        $this->wordpressMiddleware->addFilter('woocommerce_template_loader_files', function () {
            global $wp_query;
            return is_product() || is_tax() ? ['index.php'] : [];
        });

        $this->wordpressMiddleware->addFilter('woocommerce_rest_check_permissions', function () {
            //return wp_get_current_user();
//            return new WP_User(1);s
//    if( 'GET' ==  WC()->api->server->method ){
            return new WP_User(1);
//    } else {
//        throw new Exception( __( 'You dont have permission', 'woocommerce' ), 401 );
        }, 1);

        /**
         * Append a filter to search a product bu author id in the api rest
         */
        $this->wordpressMiddleware->addFilter('woocommerce_rest_product_object_query', function ($args, $request) {
            if (isset($request['author'])) {
                $args['author'] = $request['author'];
            }

            return $args;
        }, 1, 2);

        /**
         * Add the categories woocommerce for partner
         */
        $this->wordpressMiddleware->addFilter('woocommerce_taxonomy_objects_product_cat', function ($args) {
            return [Partner::POST_TYPE_NAME, ...$args];
        }, 1);

//        add_filter('woocommerce_store_api_disable_nonce_check', fn() => true);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
