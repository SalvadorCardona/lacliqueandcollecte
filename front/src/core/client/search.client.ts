import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";

export default class SearchClient extends Abstract {
    public search(): Promise<any> {
        return this.clientHttp.send('get', environment.apiEndpoints.search.all, {
            query: '',
            orderBy: 'price',
            orderDirection: 'asc',
            filters: {
                price: [50, 8000],
                categories: [1, 4, 6],
                postAuthors: [1, 2, 3],
            }
        })
          .then(response => {
              console.log(response);
              return response;
          });
    }
}