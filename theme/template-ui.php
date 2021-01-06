<?php
/**
 * Template Name: App Ui Container
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
get_header();
?>
<?php
while ( have_posts() ) : the_post();
    ?>

    <main class="container my-5" role="main">
        <app-ui-template></app-ui-template>
    </main>

<?php
endwhile;

get_footer();