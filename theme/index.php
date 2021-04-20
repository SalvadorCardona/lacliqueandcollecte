<?php

/**
 * The site's entry point.
 *
 * Loads the relevant template part,
 * the loop is executed (when needed) by the relevant template part.
 *
 * @package HelloElementor
 */

use App\Application\Helper\WordpressHelper;
use App\Infrastructure\Partner\Partner;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
get_header();

$post = get_post();

if (is_product()) {
    echo "<app-product-view productId=\"{$post->ID}\"></app-product-view>";
} elseif ($post && $post->post_type === Partner::POST_TYPE_NAME) {
    echo "<app-partner-view partnerPostId=\"{$post->ID}\"></app-partner-view>";
} elseif (is_singular()) {
    get_template_part('template-parts/single');
} elseif (is_archive() || is_home()) {
    get_template_part('template-parts/archive');
} elseif (is_search()) {
    get_template_part('template-parts/search');
} else {
    get_template_part('template-parts/404');
}
?>

<?php
get_footer();
