import {AppComponent} from "App/core/custom.element";
import {html , TemplateResult} from "lit-element";
import {ProductType} from "App/types/product.type";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";

export default class SearchContentComponent extends AppComponent {

    public constructor(private productList: ProductType[] = []) {
        super();
    }

    public static getComponentName(): string {
        return 'app-search-content';
    }

    public render(): TemplateResult {
        return html`
            <div class="row row-cols-md-4">
                ${this.productList.map(product => this.createElement(ProductCardComponent, {product: product}))}
            </div>
        `;
    }

}