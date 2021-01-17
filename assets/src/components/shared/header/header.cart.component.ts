import {AppComponent} from "App/components/custom.element";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {events, EventService} from "App/core/event.service";
import {ServiceContainer} from "App/core/service.container";
import { html, property } from "lit-element";

export default class HeaderCartComponent extends AppComponent {
    @property({type: Object})
    private cart: CartType|null = null;
    private cartService: CartService;
    private eventService: EventService;

    protected onInit(serviceContainer: ServiceContainer) {
        this.cartService = serviceContainer.service(CartService);
        this.eventService = serviceContainer.service(EventService);
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, _ => this.cartUpdated())
    }

    public render() {
        return html`
            <a href="#panier"><app-icon icon="cart"></app-icon></a>
        `;
    }

    private cartUpdated() {
        this.cart = this.cartService.cart;
    }
}