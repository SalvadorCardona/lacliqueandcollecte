import {PostType} from "App/types/post.type";

export interface WpQuery {
    query:              Array<any>;
    dateQuery:          boolean;
    queriedObject:      QueriedObject;
    queriedObjectID:    number;
    posts:              PostType[];
    postCount:          number;
    currentPost:        number;
    inTheLoop:          boolean;
    post:               PostType;
    commentCount:       number;
    currentComment:     number;
    foundPosts:         number;
    maxNumPages:        number;
    maxNumCommentPages: number;
    isSingle:           boolean;
    isPreview:          boolean;
    isPage:             boolean;
    isArchive:          boolean;
    isDate:             boolean;
    isYear:             boolean;
    isMonth:            boolean;
    isDay:              boolean;
    isTime:             boolean;
    isAuthor:           boolean;
    isCategory:         boolean;
    isTag:              boolean;
    isTax:              boolean;
    isSearch:           boolean;
    isFeed:             boolean;
    isCommentFeed:      boolean;
    isTrackback:        boolean;
    isHome:             boolean;
    isPrivacyPolicy:    boolean;
    is404:              boolean;
    isEmbed:            boolean;
    isPaged:            boolean;
    isAdmin:            boolean;
    isAttachment:       boolean;
    isSingular:         boolean;
    isRobots:           boolean;
    isFavicon:          boolean;
    isPostsPage:        boolean;
    isPostTypeArchive:  boolean;
}

export interface QueriedObject {
    termID:         number;
    name:           string;
    slug:           string;
    termGroup:      number;
    termTaxonomyId: number;
    taxonomy:       string;
    description:    string;
    parent:         number;
    count:          number;
    filter:         string;
}