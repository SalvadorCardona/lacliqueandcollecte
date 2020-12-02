<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package GeneratePress
 */

use App\Action\PostTypePartner;
use App\Helper\Template;
use App\Helper\WordpressHelper as WH;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

$post = get_post();
$metaPost = get_post_meta( $post->ID );

get_header()?>
<main id="main">

    <div id="partner-header" class="app-wrapper row">
        <?php if (Template::exist(PostTypePartner::FIELD_SHOP_PICTURE, $metaPost)): ?>
            <div class="col-12" id="wrapper-shop-picture"
                 style="background-image: url('<?php echo wp_get_attachment_url( Template::getValue(PostTypePartner::FIELD_SHOP_PICTURE, $metaPost) ) ?>')"
            >
            </div>
        <?php endif; ?>

        <div id="face-picture" class="col-3 text-center">
            <img id="picture"
                 src="<?php echo wp_get_attachment_url( Template::getValue(PostTypePartner::FIELD_FACE_PICTURE, $metaPost) ) ?>"
                 alt="face-picture">
            <div id="last-name" >
                <div>
                    <?php Template::print(PostTypePartner::FIELD_LAST_NAME, $metaPost); ?>
                </div>
                <div>
                    <?php Template::print(PostTypePartner::FIELD_CITY, $metaPost); ?>
                </div>
            </div>
        </div>
        <div id="partner" class="col-9 align-self-center">
            <h1>
                <?php Template::print(PostTypePartner::FIELD_SHOP_NAME, $metaPost); ?>
            </h1>
            <span>
                Situé dans la ville de Lyon
            </span>
        </div>
    </div>

    <div id="partner-content" class="row">
        <div class="col-4">
            <div class="app-wrapper">
                <h2><?php echo WH::trans('Présensation')?></h2>
                <p>
                    <?php Template::print(PostTypePartner::FIELD_SHOP_DESCRIPTION, $metaPost); ?>
                </p>
            </div>
        </div>
        <div class="col-8 ml-lg-0">

                <h2><?php echo WH::trans('Les produits de Céline')?></h2>
                <p>
                    <?php Template::print(PostTypePartner::FIELD_SHOP_DESCRIPTION, $metaPost); ?>
                </p>

        </div>
    </div>

    <?php
    do_action( 'generate_after_main_content' );
    ?>
</main>
<?php

get_footer();
