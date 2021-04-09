import {AppComponent, createElement} from "App/components/custom.element";
import {ProductType} from "App/types/product.type";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";
import {injector} from "App/core/container.service";
import {filterTax} from "App/shared/helper";
import {ModalService} from "App/core/modal.service";
import ModalProductComponent from "App/components/shared/modal.product.component";
import {property} from "lit-element/lib/decorators";
import {html , TemplateResult} from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import ProductClient from "App/core/client/product.client";


export default class ProductViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-product-view';
    }

    @property({type: Number})
    private productId: number;

    @property({type: Object})
    private product?: ProductType;

    private quantity = 1;

    @injector(CartService)
    private cartService: CartService;

    @injector(LoaderService)
    private loaderService: LoaderService;

    @injector(ModalService)
    private modalService: ModalService;

    @injector(ProductClient)
    private productClient: ProductClient;

    public firstUpdated(): void {
        this.productClient.getProducts({include: [this.productId]})
            .then(product => {
                this.loaderService.hide();
                this.product = product[0];
            });

        this.loaderService.show();
    }

    private addItem(): void {
        this.cartService.addItem(this.productId, this.quantity)
            .then(() => {
                const modalProductComponent: ModalProductComponent = createElement(ModalProductComponent);
                modalProductComponent.product = this.product;
                this.modalService.open(modalProductComponent, 'Votre produit a été enregistré');
            })
    }

    public render(): TemplateResult {
        if (!this.product) return html``;
        return html`
            <div class="container">
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
            </div>
        `;
    }
}