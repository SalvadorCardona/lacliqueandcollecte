import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {PostType} from "App/types/post.type";
import {ProductPost} from "App/types/product.type";
import {PartnerPost} from "App/types/partner.type";

export interface SearchParams {
    query?: string;
    orderBy?: string;
    orderDirection?: string;
    price?: Array<number>,
    product_cat?: Array<number>,
    city?: Array<number>,
    author__in?: Array<number>,
    posts_per_page?: number,
    searchable?: boolean,
    offset?: number,
    post_type?: string
}

export interface SearchResponse {
    items: ProductPost[]|PartnerPost[]|PostType[];
    itemCount: number;
    itemPerPage: number;
    searchableList?: Array<Searchable>
}

export interface Searchable {
    id: number;
    name: string;
    searchableItems: SearchableItem[];
}

export interface SearchableItem {
    id: number;
    label: string;
    name: string;
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