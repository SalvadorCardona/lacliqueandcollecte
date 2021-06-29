<?php

/**
 * The site's entry point.
 *
 * Loads the relevant template part,
 * the loop is executed (when needed) by the relevant template part.
 *
 * @package ZartizanaTheme
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
get_header();

?>

<?php
get_footer();
