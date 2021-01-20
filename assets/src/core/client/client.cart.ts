import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {CartType} from "App/types/cart.type";

export default class ClientCart extends Abstract {
    public addItem(idProduct: number, quantity: number, variation: string = null): Promise<CartType> {
        return new Promise(resolve => {
            this.clientHttp.send('post', environment.apiEndpoints.cart.addItem, {
                id: idProduct,
                quantity: quantity
            })
            .then(response => {
                resolve(response.data as CartType);
            });
        });
    }
    public removeItems(): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.clientHttp.send('delete', environment.apiEndpoints.cart.deleteItems)
                .then(_ => {
                    resolve(true);
                })
                .catch(_ => {
                    reject(false)
                })
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