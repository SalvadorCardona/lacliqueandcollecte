import {TermType} from "App/modules/shared/types/term.type";
import {PostType} from "App/modules/shared/types/post.type";

export interface WpQuery {
    commentCount: number;
    currentComment: number;
    currentPost: number;
    dateQuery: boolean;
    foundPost: number;
    inTheLoop: boolean;
    is404: boolean;
    isAdmin: boolean;
    isArchive: boolean;
    isAttachment: boolean;
    isAuthor: boolean;
    isCategory: boolean;
    isCommentFeed: boolean;
    isDate: boolean;
    isDay: boolean;
    isEmbed: boolean;
    isFavicon: boolean;
    isFeed: boolean;
    isHome: boolean;
    isMonth: boolean;
    isPage: boolean;
    isPaged: boolean;
    isPostTypeArchive: boolean;
    isPostsPage: boolean;
    isPreview: boolean;
    isPrivacyPolicy: boolean;
    isRobots: boolean;
    isSearch: boolean;
    isSingle: boolean;
    isSingular: boolean;
    isTag: boolean;
    isTax: boolean;
    isTime: boolean;
    isTrackback: boolean;
    isYear: boolean;
    maxNumCommentPages: number;
    maxNumPages: number;
    isShop: boolean;
    queriedObject?: TermType | PostType
}
