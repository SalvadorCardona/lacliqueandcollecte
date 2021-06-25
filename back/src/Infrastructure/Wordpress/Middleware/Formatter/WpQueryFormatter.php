<?php

declare(strict_types=1);

namespace App\Infrastructure\Wordpress\Middleware\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Wordpress\Middleware\Entity\MiddlewareWPQuery;
use WP_Query;

/**
 * Todo : I need unitTest
 */
class WpQueryFormatter extends Formatter
{
    /**
     * @param WP_Query $data
     * @return MiddlewareWPQuery
     */
    public function format($data): MiddlewareWPQuery
    {
        return (new MiddlewareWPQuery())
            ->setQueriedObject($data->queried_object)
            ->setCommentCount($data->comment_count)
            ->setCurrentComment($data->current_comment)
            ->setCurrentPost($data->current_post)
            ->setDateQuery((bool)$data->date_query)
            ->setFoundPost($data->found_posts)
            ->setInTheLoop($data->in_the_loop)
            ->setIs404($data->is_404)
            ->setIsAdmin($data->is_admin)
            ->setIsArchive($data->is_archive)
            ->setIsAttachment($data->is_attachment)
            ->setIsAuthor($data->is_author)
            ->setIsCategory($data->is_category)
            ->setIsCommentFeed($data->is_comment_feed)
            ->setIsDate($data->is_date)
            ->setIsDay($data->is_day)
            ->setIsEmbed($data->is_embed)
            ->setIsFavicon($data->is_favicon)
            ->setIsFeed($data->is_feed)
            ->setIsHome($data->is_home)
            ->setIsMonth($data->is_month)
            ->setIsPage($data->is_page)
            ->setIsPaged($data->is_paged)
            ->setIsPostTypeArchive($data->is_post_type_archive)
            ->setIsPostsPage($data->is_posts_page)
            ->setIsPreview($data->is_preview)
            ->setIsPrivacyPolicy($data->is_privacy_policy)
            ->setIsRobots($data->is_robots)
            ->setIsSearch($data->is_search)
            ->setIsSingle($data->is_single)
            ->setIsSingular($data->is_singular)
            ->setIsTag($data->is_tag)
            ->setIsTax($data->is_tax)
            ->setIsTime($data->is_time)
            ->setIsTrackback($data->is_trackback)
            ->setIsYear($data->is_year)
            ->setMaxNumCommentPages($data->max_num_comment_pages)
            ->setMaxNumPages($data->max_num_pages);
    }
}
