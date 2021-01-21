export const getMiddleware = (): MiddlewareType => {
    if (window["appMiddleware"]) {
        return window["appMiddleware"] as MiddlewareType;
    }

    return {} as MiddlewareType;
}

export interface MiddlewareType {
    wcStoreApi: string;
}