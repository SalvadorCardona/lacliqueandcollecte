import ClientService from "App/core/client.service";
import {ContainerService, OnInit} from "App/core/container.service";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";

export default class CartService implements OnInit {
    private clientService: ClientService;
    private eventService: EventService;
    public cart: CartType|null = null;

    onInit(containerService: ContainerService) {
        this.clientService = containerService.service(ClientService);
        this.eventService = containerService.service(EventService);
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