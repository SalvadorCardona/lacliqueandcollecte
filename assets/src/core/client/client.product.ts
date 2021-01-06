import {environment} from "App/environement/environement";
import Abstract from "App/core/abstract.client";
import {ProductType} from "App/types/product.type";

export interface QuerySearch {
    author?: number;
    /**
     * List of Ids
     */
    include?: Array<number>
}

export default class ClientProduct extends Abstract {
    public getProducts(query: QuerySearch = {}): Promise<ProductType[]> {
        return new Promise(resolve => {
            this.clientHttp.send('get', environment.apiEndpoints.getProducts, query)
                .then(response => {
                    resolve(response.data as ProductType[]);
                });
        });
    }
}