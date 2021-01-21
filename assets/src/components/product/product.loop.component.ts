import ClientService from "App/core/client.service";
import {AppComponent} from "App/components/custom.element";
import {ProductType} from "App/types/product.type"
import {html, property } from "lit-element";
import {ContainerService} from "App/core/container.service";

export default class ProductLoopComponent extends AppComponent {
    @property({type: Number})
    private idUser: number;

    @property({type: Object})
    private products: Array<ProductType>

    private clientService: ClientService|null;

    onInit(containerService: ContainerService) {
        this.clientService = containerService.service(ClientService);
    }

    public firstUpdated()
    {
        this.clientService.product.getProducts({author: this.idUser})
            .then(products => {
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
