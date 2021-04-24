import {AppComponent} from "App/core/custom.element";
import {html , TemplateResult} from "lit-element";
import SearchLeftBarComponent from "App/modules/search/components/search.left.bar.component";
import SearchContentComponent from "App/modules/search/components/search.content.component";
import {injector} from "App/core/container.service";
import SearchService from "App/modules/search/service/search.service";
import {ProductType} from "App/types/product.type";
import {property} from "lit-element/lib/decorators";

export default class SearchViewComponent extends AppComponent {

    @injector(SearchService)
    private searchService: SearchService;

    @property({type: Array})
    private productList: ProductType[];

    public static getComponentName(): string {
        return 'app-search-view';
    }

    public connectedCallback(): void {
        super.connectedCallback();
        this.searchService.onChange(state => {
            this.productList = state;
        });

        this.searchService.search();
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid">
                <div class="col-md-12 text-center mt-5">
                    <h1 class="title-border">La boutique</h1>
                </div>
                <div class="mt-5 row">
                    <div class="col-md-3">
                        ${this.createElement(SearchLeftBarComponent)}
                    </div>
                    <div class="col-md-9">
                        ${this.createElement(SearchContentComponent)}
                    </div>
                </div>
            </div>
        `;
    }
}