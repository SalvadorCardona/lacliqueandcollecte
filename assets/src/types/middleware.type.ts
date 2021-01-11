export const getMiddleware = (): MiddlewareType => {
    // @ts-ignore
    return window.appMiddleware as MiddlewareType;
}

export interface MiddlewareType {
    wcStoreApi: string;
}