import {AppComponent, createElement} from "App/components/custom.element";
import ClientService from "App/core/client.service";
import {ProductType} from "App/types/product.type";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";
import {ContainerService} from "App/core/container.service";
import {filterTax} from "App/shared/helper";
import {ModalService} from "App/core/modal.service";
import ModalProductComponent from "App/components/shared/modal.product.component";
import { property } from "lit-element/lib/decorators";
import { html } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';


export default class ProductViewComponent extends AppComponent {
    @property({type: Number})
    private productId: number;

    @property({type: Object})
    private product?: ProductType;

    private quantity: number = 1;
    private cartService: CartService;

    private loaderService: LoaderService;

    private modalService: ModalService;

    private clientService: ClientService;

     onInit(containerService: ContainerService) {
         this.loaderService = containerService.service(LoaderService);
         this.cartService = containerService.service(CartService);
         this.modalService = containerService.service(ModalService);
         this.clientService = containerService.service(ClientService);
    }

    public firstUpdated(): void {
        this.clientService.product.getProducts({include: [this.productId]})
            .then(product => {
                this.loaderService.hide();
                this.product = product[0];
            });

        this.loaderService.show();
    }

    private addItem(): void {
        this.cartService.addItem(this.productId, this.quantity)
            .then(_ => {
                let modalProductComponent: ModalProductComponent = createElement(ModalProductComponent);
                modalProductComponent.product = this.product;
                this.modalService.open(modalProductComponent, 'Votre produit a été enregistré');
            })
    }

    public render() {
        if (!this.product) return html``;
        return html`
            <div class="type-product">
                <div class="row">
                    <section class="col-md-6">
                        <img class="img-fluid" alt="${this.product.images[0].alt}" src="${this.product.images[0].src}"/>
                    </section>
                    <section class="col-md-6">
                        <h1 class="mt-2 text-primary">${this.product.name}</h1>
                        <hr>
                        <h2 class="fs-4">Description :</h2>
                        <span>${unsafeHTML(this.product.description)}</span>
                        <hr>
                        <div class="price text-secondary fs-3 mx-2">${filterTax(this.product.price)}</div>
                        <hr>
                        <div class="row add-to-basket mt-1">
                            <div class="col-md-3">
                                <select id="product-qty" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <app-button @click="${this.addItem}" type="primary" icon="cartPlus" label="Ajouter au panier"></app-button>
                        </div>
                    </section>
                </div>
            </div>      
        `;
    }
}