<?php

/**
 * Template Name: App Ui Container
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

get_header();

while (have_posts()) :
    the_post();
    ?>

    <main class="container my-5" role="main">
        <app-ui></app-ui>
    </main>

    <?php
endwhile;

get_footer();