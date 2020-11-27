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

use App\Action\PostTypeSeller;
use App\Helper\Template;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

$post = get_post();
$metaPost = get_post_meta( $post->ID );

get_header()?>

    <div id="primary page-partner" <?php generate_do_element_classes( 'content' ); ?>>
        <main id="main" <?php generate_do_element_classes( 'main' ); ?>>

            <?php
            do_action( 'generate_before_main_content' );
            ?>

            <?php if (Template::exist(PostTypeSeller::FIELD_SHOP_PICTURE, $metaPost)): ?>
                <div id="wrapper-shop-picture"
                     style="background-image: url('<?php echo wp_get_attachment_url( Template::getValue(PostTypeSeller::FIELD_SHOP_PICTURE, $metaPost) ) ?>')"
                >
                </div>
            <?php endif; ?>

            <div id="wrapper-social" class="row">
                <div id="face-picture" class="col-3">
                    <div id="picture"
                         style="background-image: url('<?php echo wp_get_attachment_url( Template::getValue(PostTypeSeller::FIELD_FACE_PICTURE, $metaPost) ) ?>')"
                    >
                    </div>
                    <div id="last-name" class="text-center">
                        <div>
                            <?php Template::print(PostTypeSeller::FIELD_LAST_NAME, $metaPost); ?>
                        </div>
                        <div>
                            <?php Template::print(PostTypeSeller::FIELD_CITY, $metaPost); ?>
                        </div>
                    </div>
                </div>
                <div id="partner" class="col-9">
                    <div>
                        <h1>
                            <?php Template::print(PostTypeSeller::FIELD_SHOP_NAME, $metaPost); ?>
                        </h1>
                    </div>
                </div>
            </div>

            <?php
            do_action( 'generate_after_main_content' );
            ?>
        </main>
    </div>

<?php
/**
 * generate_after_primary_content_area hook.
 *
 * @since 2.0
 */
do_action( 'generate_after_primary_content_area' );

generate_construct_sidebars();

get_footer();
