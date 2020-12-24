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

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

use App\Action\PostTypePartner;
use App\Helper\Template;
use App\Helper\WordpressHelper as WH;


$post = get_post();
$metaPost = get_post_meta($post->ID);

get_header()?>
<main id="main" class="container">

    <div class="row">
        <app-partner-header></app-partner-header>
    </div>

    <div id="partner-content" class="row">
        <div class="col-md-8 ml-lg-0">
            <h4><?= WH::trans('Les produits de Céline')?></h4>
            <app-product-loop id-user="<?= $post->post_author ?>"></app-product-loop>
        </div>

        <div class="col-md-4">
            <div class="app-wrapper">
                <div class="title"><?= WH::trans('Présensation')?></div>
                <p>
                    <?= Template::getValue(PostTypePartner::FIELD_SHOP_DESCRIPTION, $metaPost); ?>
                </p>
            </div>
            <div class="app-wrapper">
                <div class="title"><?= WH::trans('Contacts du commerçant')?></div>
                <p>
                    <?=  Template::getValue(PostTypePartner::FIELD_SHOP_DESCRIPTION, $metaPost); ?>
                </p>
            </div>
        </div>
    </div>
    <?php
    do_action('generate_after_main_content');
    ?>
</main>
<?php

get_footer();
