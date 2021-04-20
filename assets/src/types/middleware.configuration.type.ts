import {PostType} from "App/types/post.type";
import {UserType} from "App/types/user.type";

export interface MiddlewareConfigurationType {
    wcStoreApi: string;
    logoUrl: string;
    siteUrl: string;
    user: UserType;
    mainMenu: Array<PostType>;
    wpApiKey: string;
}