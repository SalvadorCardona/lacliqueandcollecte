import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {ProductType} from "App/types/product.type";

export interface QuerySearch {
    author?: number;
    /**
     * List of Ids
     */
    include?: Array<number>
}

export default class ProductClient extends Abstract {
    public getProducts(query: QuerySearch = {}): Promise<ProductType[]> {
        return new Promise(resolve => {
            this.clientHttp.send('get', environment.apiEndpoints.getProducts, {params: query})
                .then(response => {
                    resolve(response.data as ProductType[]);
                });
        });
    }
}