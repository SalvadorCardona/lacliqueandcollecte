import ClientService from "App/core/client.service";
import {AppComponent} from "App/components/custom.element";
import {ProductType} from "App/types/product.type"
import {html, property } from "lit-element";
import {ServiceContainer} from "App/core/service.container";

export default class ProductLoopComponent extends AppComponent {
    @property({type: Number})
    private idUser: number;

    @property({type: Object})
    private products: Array<ProductType>

    private clientService: ClientService;

    onInit(serviceContainer: ServiceContainer) {
        this.clientService = serviceContainer.service<ClientService>(ClientService);
    }

    public firstUpdated()
    {
        this.clientService.product.getProducts({author: this.idUser})
            .then(products => {
                console.log(products)
                let wrapper = document.createElement('div');
                wrapper.classList.add(...['row', 'product-loop']);
                this.products = products;
            })
    }

    public render()
    {
        if(!this.products) return '';

        return html`
            <div class="d-flex product-loop d-grid row row-cols-3">
                ${this.products.map(product => html`<app-product .product="${product}"></app-product>`)}
            </div>
        `;
    }
}
