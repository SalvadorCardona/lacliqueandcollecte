import AbstractStore from "App/core/abstract.store";
import {injector} from "App/core/container.service";
import SearchClient, {SearchParams, SearchResponse} from "App/core/client/search.client";


export default class SearchService extends AbstractStore<SearchResponse> {
    @injector(SearchClient)
    private searchClient: SearchClient;

    public search(searchParams : SearchParams): void {
        this.searchClient.search(searchParams)
            .then(productList => this.state = productList);
    }
}