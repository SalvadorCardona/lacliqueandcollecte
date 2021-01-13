import {AppHtmlElement} from "App/components/custom.element";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {events, EventService} from "App/core/event.service";
import {ServiceContainer} from "App/core/service.container";

export default class HeaderCartComponent extends AppHtmlElement {
    private cart: CartType|null = null;
    private cartService: CartService;
    private eventService: EventService;

    onInit(serviceContainer: ServiceContainer) {
        this.cartService = serviceContainer.service(CartService);
        this.eventService = serviceContainer.service(EventService);
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, _ => this.cartUpdated())
    }

    onMounted() {
        this.querySelector('a').addEventListener('click', () => {
            alert('click ready')
        })
    }

    public render(): string {
        return `
            <a href="#panier"><app-icon icon="cart"></app-icon></a>
            ${this.renderCartItemList()}
        `;
    }

    public renderCartItemList(): string {
        if (!this.cart) return '';

        return `
            <div class="cart-product-list">
               ${this.cart.itemsCount}
            </div>
        `;
    }

    private cartUpdated() {
        this.cart = this.cartService.cart;
        this.printRender();
    }
}