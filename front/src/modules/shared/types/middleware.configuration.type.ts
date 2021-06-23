import {PostType} from "App/modules/shared/types/post.type";
import {UserType} from "App/modules/shared/types/user.type";
import {WpQuery} from "App/modules/shared/types/wp.query.type";
import {MiddlewareCategory} from "App/modules/shared/types/midlewarecategory.type";

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
