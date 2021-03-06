<?php

/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 *
 * @package ZartizanaTheme
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

while (have_posts()) :
    the_post();
    ?>

<div class="page-content">
    <?php the_content(); ?>
    <div class="post-tags">
        <?php the_tags('<span class="tag-links">' . __('Tagged ', 'hello-elementor'), null, '</span>'); ?>
    </div>
    <?php wp_link_pages(); ?>
</div>

    <?php comments_template();
endwhile;
