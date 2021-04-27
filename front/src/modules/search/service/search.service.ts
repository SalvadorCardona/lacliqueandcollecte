import AbstractStore from "App/core/abstract.store";
import {injector} from "App/core/container.service";
import {ProductType} from "App/types/product.type";
import SearchClient from "App/core/client/search.client";

export default class SearchService extends AbstractStore {
    @injector(SearchClient)
    private productClient: SearchClient;

    protected stateList: Array<ProductType[]> = [];

    public search(): void {
        this.productClient.search()
            .then(productList => this.state = productList);
    }
}