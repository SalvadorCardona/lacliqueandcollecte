import {injector, OnInit} from "App/modules/shared/services/container.service";
import {CartType} from "App/types/cart.type";
import EventService, {events} from "App/modules/shared/services/event.service";
import CartClient from "App/modules/shared/services/client/cart.client";

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
      return this.cartClient.addItem(productId, quantity)
          .then(cart => {
              this.cart = cart;
              this.cartHasChanged();
              return cart;
          });
    }

    public removeItem(keyProduct: string): Promise<boolean> {
        return this.cartClient.removeItem(keyProduct)
            .then(isRemove => {
                this.loadCart();
                return isRemove;
            });
    }

    public removeItems(): Promise<boolean> {
        return this.cartClient.removeItems()
            .then(isRemove => {
              this.loadCart();
              return isRemove
            });
    }

    private cartHasChanged(): void {
        this.eventService.dispatch(events.CART_HAS_CHANGED);
    }
}