<?php

namespace App\Infrastructure\Wordpress\Middleware\Entity;

class MiddlewareWPQuery
{
    public int $commentCount;
    public int $currentComment;
    public int $currentPost;
    public bool $dateQuery;
    public int $foundPost;
    public bool $inTheLoop;
    public bool $is404;
    public bool $isAdmin;
    public bool $isArchive;
    public bool $isAttachment;
    public bool $isAuthor;
    public bool $isCategory;
    public bool $isCommentFeed;
    public bool $isDate;
    public bool $isDay;
    public bool $isEmbed;
    public bool $isFavicon;
    public bool $isFeed;
    public bool $isHome;
    public bool $isMonth;
    public bool $isPage;
    public bool $isPaged;
    public bool $isPostTypeArchive;
    public bool $isPostsPage;
    public bool $isPreview;
    public bool $isPrivacyPolicy;
    public bool $isRobots;
    public bool $isSearch;
    public bool $isSingle;
    public bool $isSingular;
    public bool $isTag;
    public bool $isTax;
    public bool $isTime;
    public bool $isTrackback;
    public bool $isYear;
    public int $maxNumCommentPages;
    public float $maxNumPages;

    public function setCommentCount(int $commentCount): MiddlewareWPQuery
    {
        $this->commentCount = $commentCount;
        return $this;
    }

    public function setCurrentComment(int $currentComment): MiddlewareWPQuery
    {
        $this->currentComment = $currentComment;
        return $this;
    }

    public function setCurrentPost(int $currentPost): MiddlewareWPQuery
    {
        $this->currentPost = $currentPost;
        return $this;
    }

    public function setDateQuery(bool $dateQuery): MiddlewareWPQuery
    {
        $this->dateQuery = $dateQuery;
        return $this;
    }

    public function setFoundPost(int $foundPost): MiddlewareWPQuery
    {
        $this->foundPost = $foundPost;
        return $this;
    }

    public function setInTheLoop(bool $inTheLoop): MiddlewareWPQuery
    {
        $this->inTheLoop = $inTheLoop;
        return $this;
    }

    public function setIs404(bool $is404): MiddlewareWPQuery
    {
        $this->is404 = $is404;
        return $this;
    }

    public function setIsAdmin(bool $isAdmin): MiddlewareWPQuery
    {
        $this->isAdmin = $isAdmin;
        return $this;
    }

    public function setIsArchive(bool $isArchive): MiddlewareWPQuery
    {
        $this->isArchive = $isArchive;
        return $this;
    }

    public function setIsAttachment(bool $isAttachment): MiddlewareWPQuery
    {
        $this->isAttachment = $isAttachment;
        return $this;
    }

    public function setIsAuthor(bool $isAuthor): MiddlewareWPQuery
    {
        $this->isAuthor = $isAuthor;
        return $this;
    }

    public function setIsCategory(bool $isCategory): MiddlewareWPQuery
    {
        $this->isCategory = $isCategory;
        return $this;
    }

    public function setIsCommentFeed(bool $isCommentFeed): MiddlewareWPQuery
    {
        $this->isCommentFeed = $isCommentFeed;
        return $this;
    }

    public function setIsDate(bool $isDate): MiddlewareWPQuery
    {
        $this->isDate = $isDate;
        return $this;
    }

    public function setIsDay(bool $isDay): MiddlewareWPQuery
    {
        $this->isDay = $isDay;
        return $this;
    }

    public function setIsEmbed(bool $isEmbed): MiddlewareWPQuery
    {
        $this->isEmbed = $isEmbed;
        return $this;
    }

    public function setIsFavicon(bool $isFavicon): MiddlewareWPQuery
    {
        $this->isFavicon = $isFavicon;
        return $this;
    }

    public function setIsFeed(bool $isFeed): MiddlewareWPQuery
    {
        $this->isFeed = $isFeed;
        return $this;
    }

    public function setIsHome(bool $isHome): MiddlewareWPQuery
    {
        $this->isHome = $isHome;
        return $this;
    }

    public function setIsMonth(bool $isMonth): MiddlewareWPQuery
    {
        $this->isMonth = $isMonth;
        return $this;
    }

    public function setIsPage(bool $isPage): MiddlewareWPQuery
    {
        $this->isPage = $isPage;
        return $this;
    }

    public function setIsPaged(bool $isPaged): MiddlewareWPQuery
    {
        $this->isPaged = $isPaged;
        return $this;
    }

    public function setIsPostTypeArchive(bool $isPostTypeArchive): MiddlewareWPQuery
    {
        $this->isPostTypeArchive = $isPostTypeArchive;
        return $this;
    }

    public function setIsPostsPage(bool $isPostsPage): MiddlewareWPQuery
    {
        $this->isPostsPage = $isPostsPage;
        return $this;
    }

    public function setIsPreview(bool $isPreview): MiddlewareWPQuery
    {
        $this->isPreview = $isPreview;
        return $this;
    }

    public function setIsPrivacyPolicy(bool $isPrivacyPolicy): MiddlewareWPQuery
    {
        $this->isPrivacyPolicy = $isPrivacyPolicy;
        return $this;
    }

    public function setIsRobots(bool $isRobots): MiddlewareWPQuery
    {
        $this->isRobots = $isRobots;
        return $this;
    }

    public function setIsSearch(bool $isSearch): MiddlewareWPQuery
    {
        $this->isSearch = $isSearch;
        return $this;
    }

    public function setIsSingle(bool $isSingle): MiddlewareWPQuery
    {
        $this->isSingle = $isSingle;
        return $this;
    }

    public function setIsSingular(bool $isSingular): MiddlewareWPQuery
    {
        $this->isSingular = $isSingular;
        return $this;
    }

    public function setIsTag(bool $isTag): MiddlewareWPQuery
    {
        $this->isTag = $isTag;
        return $this;
    }

    public function setIsTax(bool $isTax): MiddlewareWPQuery
    {
        $this->isTax = $isTax;
        return $this;
    }

    public function setIsTime(bool $isTime): MiddlewareWPQuery
    {
        $this->isTime = $isTime;
        return $this;
    }

    public function setIsTrackback(bool $isTrackback): MiddlewareWPQuery
    {
        $this->isTrackback = $isTrackback;
        return $this;
    }

    public function setIsYear(bool $isYear): MiddlewareWPQuery
    {
        $this->isYear = $isYear;
        return $this;
    }

    public function setMaxNumCommentPages(int $maxNumCommentPages): MiddlewareWPQuery
    {
        $this->maxNumCommentPages = $maxNumCommentPages;
        return $this;
    }

    public function setMaxNumPages(float $maxNumPages): MiddlewareWPQuery
    {
        $this->maxNumPages = (int)$maxNumPages;
        return $this;
    }
}
