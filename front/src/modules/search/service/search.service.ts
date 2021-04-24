import AbstractStore from "App/core/abstract.store";
import {injector} from "App/core/container.service";
import ProductClient from "App/core/client/product.client";
import {ProductType} from "App/types/product.type";

export default class SearchService extends AbstractStore {
    @injector(ProductClient)
    private productClient: ProductClient;

    protected stateList: Array<ProductType[]> = [];

    public search(): void {
        this.productClient.getProducts({})
            .then(productList => this.state = productList);
    }
}