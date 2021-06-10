import {PostType} from "App/types/post.type";
import {UserType} from "App/types/user.type";
import {WpQuery} from "App/types/wp.query.type";
import {Category} from "App/types/product.type";

export interface MiddlewareConfigurationType {
    wcStoreApi: string;
    siteUrl: string;
    user?: UserType;
    mainMenu: Array<PostType>;
    wpApiKey: string;
    wpQuery: WpQuery;
    translation: {[key: string]: string};
    productsCategories: Array<Category>;
}
