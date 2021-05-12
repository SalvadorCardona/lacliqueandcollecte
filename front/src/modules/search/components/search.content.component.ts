import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import {ProductPost} from "App/types/product.type";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";
import {property} from "lit-element/lib/decorators";
import {injector} from "App/core/container.service";
import SearchService from "App/core/search.service";

export default class SearchContentComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-search-content';
    }

    @property({type: Array})
    private productList: ProductPost[];

    @injector(SearchService)
    private searchService: SearchService;

    public connectedCallback(): void {
        super.connectedCallback();

        this.searchService.onChange(state => {
            this.productList = state.items as ProductPost[];
        });
    }

    public render(): TemplateResult {
        return html`
            <div class="row row-cols-md-4">
                ${this.productList.map(product => this.createElement(ProductCardComponent, {product: product}))}
            </div>
        `;
    }
}