import {AppComponent} from 'App/components/custom.element';
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import {CartType, ProductCart} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {html, property, TemplateResult} from 'lit-element';
import {ButtonType} from "App/components/shared/button.component";
import {events, EventService} from "App/core/event.service";

export default class ModalCartComponent extends AppComponent {
    @property({type: String})
    private cart: CartType;

    @injector(ModalService)
    private modalService: ModalService;

    @injector(CartService)
    private cartService: CartService;

    @injector(EventService)
    private eventService: EventService;

    public constructor() {
        super();
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, () => {this.updateCart()})
        this.updateCart();
    }

    private updateCart(): void {
        this.cart = this.cartService.cart;
    }

    public render(): TemplateResult  {
        if (!this.cart.items.length) {
            return html`
                <span>Votre Panier est vide</span>
            `;
        }

        return html`
          ${this.cart.items.map(this.itemsRender)}
          <hr>
          <app-button type="${ButtonType.DANGER}" @click="${this.removeItems}" label="Vider le panier"></app-button>
        `;
    }

    private removeItems(): void {
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

