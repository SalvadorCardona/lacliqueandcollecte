import {AppComponent} from 'App/core/custom.element';
import {injector} from "App/core/container.service";
import ModalService from "App/core/modal.service";
import {CartType, ProductCart} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {html, property, TemplateResult} from 'lit-element';
import EventService, {events} from "App/core/event.service";
import IconComponent from "App/modules/shared/components/icon.component";
import ButtonComponent from "App/modules/shared/components/button.component";

export default class ModalCartComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-modal-cart';
    }

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
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, () => {
            this.updateCart()
        })
        this.updateCart();
    }

    private updateCart(): void {
        this.cart = this.cartService.cart;
    }

    public render(): TemplateResult  {
        if (!this.cart.items.length) {
            return html`
                <span>${this.trans("modalCartEmpty")}</span>
            `;
        }

        return html`
          ${this.cart.items.map(this.itemsRender.bind(this))}
          <hr>
          ${this.createElement(ButtonComponent, {type: '${Color.DANGER}', label: 'Vider le panier'})}
        `;
    }

    private removeItems(): void {
        this.cartService.removeItems();
    }

    private removeItem(keyProduct: string): void {
        this.cartService.removeItem(keyProduct);
    }

    private itemsRender(product: ProductCart): TemplateResult {
        return html`
          <div>
              ${product.name}
              ${this.createElement(IconComponent, {$click: this.removeItem(product.key), icon: 'biX'})}
          </div>
        `;
    }
}

