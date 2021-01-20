import {AppComponent} from 'App/components/custom.element';
import {ServiceContainer} from "App/core/service.container";
import {ModalService} from "App/core/modal.service";
import {CartType, ProductCart} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import { html, property, TemplateResult } from 'lit-element';
import {ButtonType} from "App/components/shared/button.component";

export default class ModalCartComponent extends AppComponent {
    @property({type: String})
    private _cart: CartType;
    private modalService: ModalService;
    private cartService: CartService;

    protected onInit(serviceContainer: ServiceContainer): void {
        this.cartService = serviceContainer.service(CartService);
        this._cart = this.cartService.cart;
        this.modalService = serviceContainer.service(ModalService);
        console.log(this._cart)
    }

    public render(): TemplateResult  {
        return html`
          ${this._cart.items.map(this.itemsRender)}
          <hr>
          <app-button type="${ButtonType.DANGER}" @click="${this.removeItems}" label="Vider le panier"></app-button>
        `;
    }

    private removeItems() {
        this.cartService.removeItems();
    }

    private itemsRender(product: ProductCart): TemplateResult {
        return html`
          <div>
              ${product.name}
          </div>
        `;
    }
}

