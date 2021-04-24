import {AppComponent} from "App/core/custom.element";
import {ProductType} from "App/types/product.type"
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ProductClient from "App/core/client/product.client";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";

export default class ProductLoopComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-product-loop';
    }

    @property({type: Number})
    private idUser: number;

    @property({type: Object})
    private products: Array<ProductType>

    @injector(ProductClient)
    private productClient: ProductClient;

    @property({type: Number})
    private perPage: number;

    @property({type: Number})
    private grid: number = 3;

    public firstUpdated(): void
    {
        this.productClient.getProducts({author: this.idUser, per_page: this.perPage ?? 3})
            .then(products => {
                this.products = products;
            })
    }

    public render(): TemplateResult {
        if(!this.products) return ;

        return html`
            <div class="product-loop row row-cols-md-${this.grid}">
                ${this.products.map(product => html`${this.createElement(ProductCardComponent, {product: product})}`)}
            </div>
        `;
    }
}
