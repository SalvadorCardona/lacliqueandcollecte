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

<app-header menus='<?= json_encode(wp_get_nav_menu_items('main-menu')) ?>'></app-header>
