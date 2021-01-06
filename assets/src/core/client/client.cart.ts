import {environment} from "App/environement/environement";
import Abstract from "App/core/abstract.client";
import {ProductType} from "App/types/product.type";
import {CartType} from "App/types/cart.type";

export default class ClientCart extends Abstract {
    public addItem(idProduct: number, quantity: number, variation: string = null): Promise<ProductType[]> {
        return new Promise(resolve => {
            this.clientHttp.send('post', environment.apiEndpoints.cart.addItem, {
                id: idProduct,
                quantity: quantity
            })
                .then(response => {
                    console.log(response);
                });
        });
    }
    public getCart(): Promise<CartType> {
        return new Promise(resolve => {
            this.clientHttp.send('get', environment.apiEndpoints.cart.me)
                .then(response => {
                    resolve(response.data as CartType);
                });
        });
    }
}