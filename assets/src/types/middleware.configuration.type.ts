import {PostType} from "App/types/post.type";
import {UserType} from "App/types/user.type";

export const getMiddleware = (): MiddlewareConfigurationType => {
    if (window["appMiddleware"]) {
        return window["appMiddleware"] as MiddlewareConfigurationType;
    }

    return {} as MiddlewareConfigurationType;
}

export interface MiddlewareConfigurationType {
    wcStoreApi: string;
    logoUrl: string;
    siteUrl: string;
    // TODO: create my interface later
    user: UserType;
    mainMenu: Array<PostType>;
    wpApiKey: string;
}