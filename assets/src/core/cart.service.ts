import ClientService from "App/core/client.service";
import {ServiceContainer, OnInit} from "App/core/service.container";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";

export default class CartService implements OnInit {
    private clientService: ClientService;
    private eventService: EventService;
    public cart: CartType|null = null;

    onInit(serviceContainer: ServiceContainer) {
        this.clientService = serviceContainer.service(ClientService);
        this.eventService = serviceContainer.service(EventService);
        this.eventService.addSubscriber(events.SERVICE_MOUNTED, _ => this.loadCart())
    }

    public loadCart(): void {
        this.clientService.cart.getCart()
            .then(cart => {
               this.cart = cart;
               this.eventService.dispatch(events.CART_HAS_CHANGED);
            });
    }

    public addItem(productId: number, quantity: number): Promise<CartType> {
        return new Promise(resolve => {
            this.clientService.cart.addItem(productId, quantity)
                .then(cart => {
                    this.cart = cart;
                    this.eventService.dispatch(events.CART_HAS_CHANGED);
                    resolve(cart);
                })
        });
    }

    public removeItems(): Promise<Boolean> {
        return new Promise(resolve => {
            this.clientService.cart.removeItems()
                .then(isRemove => {
                    this.loadCart();
                    resolve(isRemove);
                })
        });
    }
}