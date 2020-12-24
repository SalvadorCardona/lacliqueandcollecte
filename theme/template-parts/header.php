<?php
/**
 * The template for displaying header.
 *
 * @package HelloElementor
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

?>

<header class="site-header" role="banner">

    <div class="container site-branding d-flex align-items-center">
        <?= get_custom_logo(0); ?>

        <span class="site-title">
            <a href="/" title="<?php esc_attr_e('Home', 'hello-elementor'); ?>" rel="home">
                <?= esc_html(get_bloginfo('name')); ?>
            </a>
        </span>

        <nav class="site-navigation d-flex align-items-center" role="navigation">
            <?= wp_nav_menu(array( 'name' => 'main-menu')); ?>
        </nav>
    </div>

</header>
