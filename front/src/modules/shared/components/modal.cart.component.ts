import {AppComponent} from 'App/modules/shared/services/custom.element';
import {injector} from "App/modules/shared/services/container.service";
import ModalService from "App/modules/shared/services/modal.service";
import {CartType, ProductCart} from "App/types/cart.type";
import CartService from "App/modules/shared/services/cart.service";
import {html, property, TemplateResult} from 'lit-element';
import EventService, {events} from "App/modules/shared/services/event.service";
import IconComponent from "App/modules/shared/components/icon.component";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Icon} from "App/enum/icon.enum";
import {Color} from "App/enum/color.enum";

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

    public render(): TemplateResult {
        if (!this.cart.items.length) {
            return html`
                <span>${this.trans("modal.cart.empty")}</span>
            `;
        }

        return html`
            ${this.cart.items.map(this.itemsRender.bind(this))}
            <hr>
            ${this.createElement(ButtonComponent, {
                type: Color.DANGER,
                label: this.trans("modal.cart.component.button.clear.cart.label")
            })}
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
                ${this.createElement(IconComponent, {$click: this.removeItem(product.key), icon: Icon.BIX})}
            </div>
        `;
    }
}

