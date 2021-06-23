import {environment} from "App/environement/environement";
import Abstract from "App/modules/shared/services/client/abstract.client";
import {PostType} from "App/modules/shared/types/post.type";
import {ProductPost} from "App/modules/shared/types/product.type";
import {PartnerPost} from "App/modules/shared/types/partner.type";

export interface SearchParams {
    query?: string;
    orderBy?: string;
    orderDirection?: string;
    price?: Array<number>,
    product_cat?: Array<number>,
    city?: Array<number>,
    author__in?: Array<number>,
    posts_per_page?: number
}

export interface SearchResponse {
    items: ProductPost[]|PartnerPost[]|PostType[];
    itemCount: number;
    itemPerPage: number;
}

export default class SearchClient extends Abstract {
    public search(searchParams: SearchParams = {}): Promise<SearchResponse> {
        const data = {
          params:
              {params: searchParams}
        };
        return this.clientHttp.send('get', environment.apiEndpoints.search.all, data)
          .then(response => {
              return response.data
          });
    }
}