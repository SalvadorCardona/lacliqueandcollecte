import ClientService from "App/core/client.service";
import ServiceContainer, {OnInit} from "App/core/service.container";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";

export default class CartService implements OnInit {
    private clientService: ClientService;
    private eventService: EventService;
    public cart: CartType;

    onInit(serviceContainer: ServiceContainer) {
        this.clientService = serviceContainer.service(ClientService);
        this.eventService = serviceContainer.service(EventService);
        this.eventService.addSubscriber(events.SERVICE_READY, _ => this.loadCart())
    }

    public loadCart(): void {
        this.clientService.cart.getCart()
            .then(cart => {
               this.cart = cart;
               this.eventService.dispatch(events.CART_HAS_CHANGED);
            });
    }
}