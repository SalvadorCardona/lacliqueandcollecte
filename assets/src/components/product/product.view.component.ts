import {AppHtmlElement, CustomElement} from "App/components/custom.element";
import ClientService from "App/core/client.service";
import {ProductType} from "App/types/product.type";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";

@CustomElement()
export default class ProductViewComponent extends AppHtmlElement {

    private productId: number = null;
    private product?: ProductType;
    private cartService: CartService;
    private loaderService: LoaderService;

    static get observedAttributes() { return ['product-id'];}

    onInit() {
        this.loaderService = this.getService(LoaderService);
        this.cartService = this.getService(CartService);
        let clientService = this.getService<ClientService>(ClientService);
        clientService.product.getProducts({include: [this.productId]})
            .then(product => {
                this.product = product[0];
                this.printRender();
            });
    }

    onMounted() {
        console.log(this.product)
        this.cartService.addItem(147, 2);
    }

    public render(): string {
        if (!this.product) return `Hello Product Views`;
        return `
            <div class="type-product">
                <div class="row">
                    <section class="col-md-6">
                        <img class="img-fluid" alt="${this.product.images[0].alt}" src="${this.product.images[0].src}"/>
                    </section>
                    <section class="col-md-6">
                        <h1>${this.product.name}</h1>
                        <span class="price text-info">${this.product.price} €</span>
                        <div class="row add-to-basket mt-1">
                            <div class="col-md-3">
                                <input type="text" class="form-control" value="1">
                            </div>
                            <app-button type="primary" icon="cartPlus" label="Ajouter au panier"></app-button>
                            <app-loader></app-loader>
                        </div>
                    </section>
                </div>
            </div>      
        `;
    }
}