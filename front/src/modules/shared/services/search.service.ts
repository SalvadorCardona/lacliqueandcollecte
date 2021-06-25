import AbstractStore from "App/modules/shared/services/abstract.store";
import {injector} from "App/modules/shared/services/container.service";
import SearchClient, {SearchParams, SearchResponse} from "App/modules/shared/services/client/search.client";


export default class SearchService extends AbstractStore<SearchResponse> {
    @injector(SearchClient)
    private searchClient: SearchClient;

    public search(searchParams : SearchParams): void {
        this.searchClient.search(searchParams)
            .then(productList => this.state = productList);
    }
}