import {PostType} from "App/types/post.type";
import {UserType} from "App/types/user.type";
import {WpQuery} from "App/types/wp.query.type";

export interface MiddlewareConfigurationType {
    wcStoreApi: string;
    siteUrl: string;
    user?: UserType;
    mainMenu: Array<PostType>;
    wpApiKey: string;
    wpQuery: WpQuery;
    translation: {[name: string]: string};
    productsCategories: Array<MiddlewareCategory>;
}
