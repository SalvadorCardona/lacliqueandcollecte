import {AxiosResponse} from "axios";
import {environment} from "App/environement/environement";
import Abstract from "App/core/abstract.client";

export interface QuerySearch {
    author?: number
}

export default class ClientProduct extends Abstract {
    public getProducts(query: QuerySearch = {}): Promise<AxiosResponse> {
        return this.clientHttp.send('get', environment.apiEndpoints.getProducts, query);
    }
}