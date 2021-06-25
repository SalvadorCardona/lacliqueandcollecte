import {PostType} from "App/types/post.type";
import {UserType} from "App/types/user.type";
import {QueriedObject, WpQuery} from "App/types/wp.query.type";
import {MiddlewareCategory} from "App/types/midlewarecategory.type";

export interface MiddlewareConfigurationType {
    wcStoreApi: string;
    siteUrl: string;
    user?: UserType;
    mainMenu: Array<PostType>;
    wpApiKey: string;
    wpQuery: WpQuery;
    queriedObject: QueriedObject;
    translation: {[name: string]: string};
    productsCategories: Array<MiddlewareCategory>;
}
