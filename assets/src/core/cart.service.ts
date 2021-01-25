import ClientService from "App/core/client.service";
import { injector } from "App/core/container.service";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";

export default class CartService {

    @injector(ClientService)
    private clientService: ClientService;

    @injector(EventService)
    private eventService: EventService;

    public cart: CartType|null = null;

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

    public removeItems(): Promise<boolean> {
        return new Promise(resolve => {
            this.clientService.cart.removeItems()
                .then(isRemove => {
                    this.loadCart();
                    resolve(isRemove);
                })
        });
    }
}