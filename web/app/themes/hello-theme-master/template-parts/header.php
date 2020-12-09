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
        <?php
        the_custom_logo();
        ?>
        <span class="site-title">
            <a href="/" title="<?php esc_attr_e('Home', 'hello-elementor'); ?>" rel="home">
                <?php echo esc_html($site_name); ?>
            </a>
        </span>

    </div>

    <nav class="site-navigation d-flex align-items-center" role="navigation">
        <?php wp_nav_menu(array( 'theme_location' => 'menu-1' )); ?>
    </nav>

</header>
