import {AppComponent} from "App/core/custom.element";
import {ProductPost} from "App/types/product.type"
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";
import SearchClient, {SearchParams} from "App/core/client/search.client";

export default class ProductLoopComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-product-loop';
    }

    @property({type: Number})
    private idUser: number;

    @property({type: Object})
    private productsPost: Array<ProductPost>

    @injector(SearchClient)
    private searchClient: SearchClient;

    @property({type: Number})
    private perPage: number;

    @property({type: Number})
    private grid: number = 3;

    public firstUpdated(): void
    {
        const param = {
            posts_per_page: this.perPage ?? 3
        } as SearchParams;

        if (this.idUser) {
            param.author__in = [this.idUser];
        }

        this.searchClient.search(param)
            .then(productsPost => {
                this.productsPost = productsPost.items as ProductPost[];
            })
    }

    public render(): TemplateResult {
        if(!this.productsPost) return ;

        return html`
            <div class="product-loop row row-cols-md-${this.grid}">
                ${this.productsPost.map(product => html`${this.createElement(ProductCardComponent, {product: product})}`)}
            </div>
        `;
    }
}
