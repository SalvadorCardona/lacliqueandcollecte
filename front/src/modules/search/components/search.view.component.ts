import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";
import SearchLeftBarComponent from "App/modules/search/components/search.left.bar.component";
import SearchContentComponent from "App/modules/search/components/search.content.component";
import {injector} from "App/modules/shared/services/container.service";
import {ProductPost} from "App/modules/shared/types/product.type";
import {property} from "lit-element/lib/decorators";
import LoaderService from "App/modules/shared/services/loader.service";
import {SearchParams} from "App/modules/shared/services/client/search.client";
import ConfigurationService from "App/modules/shared/services/configuration.service";
import SearchService from "App/modules/shared/services/search.service";
import headerProductsPage from "Media/product-page/header_products_page.svg";

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
            const queriedObject = this.configurationService.configuration.wpQuery.queriedObject;

            if (queriedObject && 'taxonomy' in queriedObject) {
                this.searchParams[queriedObject.taxonomy] = [queriedObject.termTaxonomyId];
            }
        }

        this.searchService.search(this.searchParams);
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid">
                <div style="background-image: url('${headerProductsPage}')"
                     class="col-md-12 
                    bg-white    
                    overflow-hidden          
                    p-5
                    d-flex           
                    justify-content-around
                    bg-white">
                    <h1 class="text-primary
                        text-bold 
                        border 
                        border-primary 
                        border-3 
                        rounded 
                        bg-white 
                        p-3 
                        text-uppercase ">
                        ${this.trans("search.view.title")}</h1>
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
