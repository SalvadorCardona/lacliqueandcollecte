import { injector } from "App/core/container.service";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";
import CartClient from "App/core/client/cart.client";

export default class CartService {

    @injector(CartClient)
    private cartClient: CartClient;

    @injector(EventService)
    private eventService: EventService;

    public cart: CartType|null = null;

    public loadCart(): void {
        this.cartClient.getCart()
            .then(cart => {
               this.cart = cart;
               this.eventService.dispatch(events.CART_HAS_CHANGED);
            });
    }

    public addItem(productId: number, quantity: number): Promise<CartType> {
        return new Promise(resolve => {
            this.cartClient.addItem(productId, quantity)
                .then(cart => {
                    this.cart = cart;
                    this.eventService.dispatch(events.CART_HAS_CHANGED);
                    resolve(cart);
                })
        });
    }

    public removeItems(): Promise<boolean> {
        return new Promise(resolve => {
            this.cartClient.removeItems()
                .then(isRemove => {
                    this.loadCart();
                    resolve(isRemove);
                })
        });
    }
}