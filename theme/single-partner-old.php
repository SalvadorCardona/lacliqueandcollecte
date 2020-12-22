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

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

$post = get_post();
$metaPost = get_post_meta($post->ID);

get_header()?>
<main id="main" class="container">

    <div id="partner-header" class="app-wrapper row">
        <?php if (Template::exist(PostTypePartner::FIELD_SHOP_PICTURE, $metaPost)) : ?>
            <div class="col-md-12" id="wrapper-shop-picture"
                 style="background-image: url('<?=  wp_get_attachment_url(Template::getValue(PostTypePartner::FIELD_SHOP_PICTURE, $metaPost)) ?>')"
            >
            </div>
        <?php endif; ?>

        <div id="face-picture" class="col-md-3 text-center">
            <img id="picture"
                 src="<?=  wp_get_attachment_url(Template::getValue(PostTypePartner::FIELD_FACE_PICTURE, $metaPost)) ?>"
                 alt="face-picture">
            <div id="last-name" >
                <div>
                    <?=  Template::getValue(PostTypePartner::FIELD_LAST_NAME, $metaPost); ?>
                </div>
                <div>
                    <?=  Template::getValue(PostTypePartner::FIELD_CITY, $metaPost); ?>
                </div>
            </div>
        </div>
        <div id="partner" class="col-md-9 align-self-center">
            <h1>
                <?=  Template::getValue(PostTypePartner::FIELD_SHOP_NAME, $metaPost); ?>
            </h1>

            <span>
                <app-icon domain="fas" icon="map-marked-alt"></app-icon>
                Situé dans la ville de Lyon
            </span>
        </div>
    </div>

    <div id="partner-content" class="row">
        <div class="col-md-4">
            <div class="app-wrapper">
                <div class="title"><?= WH::trans('Présensation')?></div>
                <p>
                    <?=  Template::getValue(PostTypePartner::FIELD_SHOP_DESCRIPTION, $metaPost); ?>
                </p>
            </div>
        </div>
        <div class="col-md-8 ml-lg-0">
            <h4><?= WH::trans('Les produits de Céline')?></h4>
            <app-product-loop id-user="<?= $post->post_author ?>"></app-product-loop>
        </div>
    </div>

    <?php
    do_action('generate_after_main_content');
    ?>
</main>
<?php

get_footer();
