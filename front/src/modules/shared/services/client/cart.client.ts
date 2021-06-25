import {environment} from "App/environement/environement";
import Abstract from "App/modules/shared/services/client/abstract.client";
import {CartType} from "App/modules/shared/types/cart.type";

export default class CartClient extends Abstract {
    public addItem(idProduct: number, quantity: number, variation: Array<string> = []): Promise<CartType> {
        return this.clientHttp.send('post', environment.apiEndpoints.cart.addItem, {
            id: idProduct,
            quantity: quantity,
            variation
        })
          .then(response => response.data as CartType);
    }

    public removeItem(keyProduct: string): Promise<boolean> {
        const url = environment.apiEndpoints.cart.deleteItem.replace('{key}', keyProduct);

        return this.clientHttp.send('delete', url)
          .then(() => true)
          .catch(() => false);
    }

    public removeItems(): Promise<boolean> {
        return this.clientHttp.send('delete', environment.apiEndpoints.cart.deleteItems)
          .then(() => true)
          .catch(() => false);
    }

    public getCart(): Promise<CartType> {
        return this.clientHttp.send('get', environment.apiEndpoints.cart.me)
          .then(response => response.data as CartType);
    }
}