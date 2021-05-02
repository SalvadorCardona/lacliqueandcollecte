import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import SearchLeftBarComponent from "App/modules/search/components/search.left.bar.component";
import SearchContentComponent from "App/modules/search/components/search.content.component";
import {injector} from "App/core/container.service";
import {ProductPost} from "App/types/product.type";
import {property} from "lit-element/lib/decorators";
import LoaderService from "App/core/loader.service";
import {SearchParams} from "App/core/client/search.client";
import ConfigurationService from "App/core/configuration.service";
import SearchService from "App/core/search.service";

export default class SearchViewComponent extends AppComponent {
    @injector(SearchService)
    private searchService: SearchService;

    @injector(LoaderService)
    private loaderService: LoaderService;

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    @property({type: Array})
    private productList: ProductPost[];

    @property({type: Object})
    private searchParams: SearchParams = {};

    public static getComponentName(): string {
        return 'app-search-view';
    }

    public connectedCallback(): void {
        super.connectedCallback();

        this.searchService.onChange(state => {
            this.loaderService.hide();
            console.log(state);
            this.productList = state.items;
        });

        if (!Object.keys(this.searchParams).length) {
            const queriedObject = this.configurationService.configuration.wpQuery.queriedObject
            this.searchParams[queriedObject.taxonomy] = [queriedObject.termTaxonomyId];
        }

        this.searchService.search(this.searchParams);
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
                        ${new SearchContentComponent(this.productList)}
                    </div>
                </div>
            </div>
        `;
    }
}