<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Filter;

use App\Infrastructure\Wordpress\Filter\AbstractFilter;

class WoocommerceRestCheckPermissionFilter extends AbstractFilter
{

    public function __invoke(): mixed
    {
        //return wp_get_current_user();
//            return new WP_User(1);
//    if( 'GET' ==  WC()->api->server->method ){
        return true;
//    } else {
//        throw new Exception( __( 'You dont have permission', 'woocommerce' ), 401 );
    }

    public static function getName(): string
    {
        return 'woocommerce_rest_check_permissions';
    }
}
