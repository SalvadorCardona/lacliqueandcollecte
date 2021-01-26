import {AppComponent} from "App/components/custom.element";
import {ProductType} from "App/types/product.type"
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ProductClient from "App/core/client/product.client";

export default class ProductLoopComponent extends AppComponent {
    @property({type: Number})
    private idUser: number;

    @property({type: Object})
    private products: Array<ProductType>

    @injector(ProductClient)
    private productClient: ProductClient;

    public firstUpdated(): void
    {
        this.productClient.getProducts({author: this.idUser})
            .then(products => {
                const wrapper = document.createElement('div');
                wrapper.classList.add(...['row', 'product-loop']);
                this.products = products;
            })
    }

    public render(): TemplateResult {
        if(!this.products) return ;

        return html`
            <div class="d-flex product-loop d-grid row row-cols-3">
                ${this.products.map(product => html`<app-product .product="${product}"></app-product>`)}
            </div>
        `;
    }
}
