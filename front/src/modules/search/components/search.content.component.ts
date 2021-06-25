import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";
import {ProductPost} from "App/modules/shared/types/product.type";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";

export default class SearchContentComponent extends AppComponent {

    public constructor(private productList: ProductPost[] = []) {
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
