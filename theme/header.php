<?php

/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package HelloElementor
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
$logo = get_theme_mod( 'custom_logo' );
$image = wp_get_attachment_image_src( $logo , 'full' );
$image_url = $image[0];
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <?php $viewport_content = apply_filters('hello_elementor_viewport_content', 'width=device-width, initial-scale=1'); ?>
    <meta name="viewport" content="<?php echo esc_attr($viewport_content); ?>">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
    <script>
        <?php echo json_encode(\App\Util\MiddlewareConfigurationFactory::build()) ?>
        const appMiddleware = {
            wcStoreApi: '<?= wp_create_nonce('wc_store_api') ?>',
            logoUrl: '<?= $image_url ?>'
        }
    </script>
<body <?php body_class(); ?>>

<?php
get_template_part('template-parts/header');
?>

<main class="site-main container" role="main">
