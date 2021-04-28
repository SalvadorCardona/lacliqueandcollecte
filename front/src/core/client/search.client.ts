import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";

export interface SearchParams {
    query?: string;
    orderBy?: string;
    orderDirection?: string;
    price?: Array<number>,
    product_cat?: Array<number>,
    city?: Array<number>,
}

export default class SearchClient extends Abstract {
    public search(params: SearchParams = {}): Promise<any> {
        return this.clientHttp.send('get', environment.apiEndpoints.search.all, params)
          .then(response => {
              console.log(response);
              return response;
          });
    }
}