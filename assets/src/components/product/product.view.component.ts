import {AppHtmlElement, CustomElement} from "App/components/custom.element";
import ClientService from "App/core/client.service";
import {ProductType} from "App/types/product.type";

@CustomElement()
export default class ProductViewComponent  extends AppHtmlElement {
    static selector = 'app-product-view';

    public productId: number|null = null;
    public product?: ProductType;

    static get observedAttributes() { return ['product-id'];}

    onInit() {
        ClientService.get().cart.addItem(this.productId, 1)
            .then(products => {
                console.log(products)
            })
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
                        </div>
                    </section>
                </div>
            </div>      
        `;
    }
}