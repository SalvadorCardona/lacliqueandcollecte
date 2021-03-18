<?php

/**
 * The site's entry point.
 *
 * Loads the relevant template part,
 * the loop is executed (when needed) by the relevant template part.
 *
 * @package HelloElementor
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
get_header();

?>
<main class="site-main" role="main">
<?php
if (is_singular()) {
    get_template_part('template-parts/single');
} elseif (is_archive() || is_home()) {
    get_template_part('template-parts/archive');
} elseif (is_search()) {
    get_template_part('template-parts/search');
} else {
    get_template_part('template-parts/404');
}
?>
</main>
<?php
get_footer();
