import {injector, OnInit} from "App/core/container.service";
import {CartType} from "App/types/cart.type";
import {events, EventService} from "App/core/event.service";
import CartClient from "App/core/client/cart.client";

export default class CartService implements OnInit {

    @injector(CartClient)
    private cartClient: CartClient;

    @injector(EventService)
    private eventService: EventService;

    public cart: CartType|null = null;

    public onInit(): void {
        this.loadCart();
    }

    public loadCart(): void {
        this.cartClient.getCart()
            .then(cart => {
               this.cart = cart;
               this.cartHasChanged();
            });
    }

    public addItem(productId: number, quantity: number): Promise<CartType> {
        return new Promise(resolve => {
            this.cartClient.addItem(productId, quantity)
                .then(cart => {
                    this.cart = cart;
                    this.cartHasChanged();
                    resolve(cart);
                })
        });
    }

    public removeItem(): Promise<boolean> {
        return new Promise(resolve => {
            this.cartClient.removeItems()
                .then(isRemove => {
                    this.loadCart();
                    resolve(isRemove);
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

    private cartHasChanged(): void {
        this.eventService.dispatch(events.CART_HAS_CHANGED);
    }
}