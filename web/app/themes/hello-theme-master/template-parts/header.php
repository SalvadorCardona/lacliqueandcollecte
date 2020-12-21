<?php
/**
 * The template for displaying header.
 *
 * @package HelloElementor
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
$site_name = get_bloginfo('name');
$tagline   = get_bloginfo('description', 'display');
?>

<header class="site-header" role="banner">

    <div class="site-branding d-flex align-items-center">
        <?= get_custom_logo(0); ?>

        <span class="site-title">
            <a href="/" title="<?php esc_attr_e('Home', 'hello-elementor'); ?>" rel="home">
                <?= esc_html($site_name); ?>
            </a>
        </span>

    </div>

    <nav class="site-navigation d-flex align-items-center" role="navigation">
        <?= wp_nav_menu(array( 'name' => 'main-menu')); ?>
    </nav>

</header>
