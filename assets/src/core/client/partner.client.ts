import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";

export default class ProductClient extends Abstract {
    public getPartnerById(query: QuerySearch = {}): Promise<ProductType[]> {
        return this.clientHttp.send('get', environment.apiEndpoints.getProducts, {params: query})
          .then(response => response.data as ProductType[]);
    }
}