<?php

namespace App\Infrastructure\Wordpress\Action;

use WP_User;

class WoocommerceSupportAction implements ActionInterface
{

    public function __invoke(): void
    {

        add_filter('woocommerce_rest_check_permissions', function () {
            //return wp_get_current_user();
            return new WP_User(1);
//    if( 'GET' ==  WC()->api->server->method ){
//        return new WP_User( 1 );
//    } else {
//        throw new Exception( __( 'You dont have permission', 'woocommerce' ), 401 );
        }, 1);

        /**
         * Append a filter to search a product bu author id in the api rest
         */
        add_filter('woocommerce_rest_product_object_query', function ($args, $request) {
            if (isset($request['author'])) {
                $args['author'] = $request['author'];
            }

            return $args;
        }, 1, 2);
    }

    public static function getAction(): string
    {
        return 'init';
    }
}
