import {AppHtmlElement, createElement, CustomElement} from "App/components/custom.element";
import ClientService from "App/core/client.service";
import {ProductType} from "App/types/product.type";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";
import {ServiceContainer} from "App/core/service.container";
import {filterTax} from "App/shared/helper";
import {ModalService} from "App/core/modal.service";
import ModalProductComponent from "App/components/shared/modal.product.component";

@CustomElement()
export default class ProductViewComponent extends AppHtmlElement {

    private productId: number = null;
    private quantity: number = 1;
    private product?: ProductType;
    private cartService: CartService;
    private loaderService: LoaderService;
    private modalService: ModalService;
    private clientService: ClientService;

    static get observedAttributes() { return ['product-id'];}

    onInit(serviceContainer: ServiceContainer) {
        this.loaderService = serviceContainer.service(LoaderService);
        this.cartService = serviceContainer.service(CartService);
        this.modalService = serviceContainer.service(ModalService);
        this.clientService = serviceContainer.service<ClientService>(ClientService);

        this.clientService.product.getProducts({include: [this.productId]})
            .then(product => {
                this.loaderService.hide();
                this.product = product[0];
                this.printRender();
            });

        this.loaderService.show();
    }

    afterRender() {
        if (!this.querySelector('app-button')) return;
        this.addEvent('app-button', 'click', _ => this.addItem());
    }

    addItem(): void {
        this.cartService.addItem(this.productId, this.quantity)
            .then(_ => {
                let modalProductComponent: ModalProductComponent = createElement(ModalProductComponent);
                modalProductComponent.product = this.product;
                this.modalService.open(modalProductComponent, 'Votre produit a été enregistré');
            })
    }

    public render(): string {
        if (!this.product) return ``;
        return `
            <div class="type-product">
                <div class="row">
                    <section class="col-md-6">
                        <img class="img-fluid" alt="${this.product.images[0].alt}" src="${this.product.images[0].src}"/>
                    </section>
                    <section class="col-md-6">
                        <h1 class="mt-2 text-primary">${this.product.name}</h1>
                        <hr>
                        <h2 class="fs-4">Description :</h2>
                        <p>${this.product.description}</p>
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
                            <app-button type="primary" icon="cartPlus" label="Ajouter au panier"></app-button>
                        </div>
                    </section>
                </div>
            </div>      
        `;
    }
}