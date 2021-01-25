import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {environment} from "App/environement/environement";
import {keysToCamel} from "App/shared/helper";
import ClientProduct from "App/core/client/client.product";
import ClientCart from "App/core/client/client.cart";
import {getMiddleware} from "App/types/middleware.type";


export default class ClientService {
    public http: AxiosInstance;

    public product: ClientProduct;

    public cart: ClientCart;

    public constructor() {
        this.http = axios.create({
            baseURL: environment.apiEndpoint,
            headers: {
                'accept': 'application/json',
                'X-WC-Store-API-Nonce': getMiddleware().wcStoreApi,
            }
        });

        this.http.interceptors.response.use((response: AxiosResponse) => {
            if (
                response.data
            ) {
                response.data = keysToCamel(response.data);
            }

            return response;
        });

        this.setupClient();
    }

    public setupClient(): void {
        this.product = new ClientProduct(this);
        this.cart = new ClientCart(this);
    }

    public send(method: string, route: string, data: { [name: string]: string|number } = {}): Promise<AxiosResponse> {
        return this.http[method](route, data);
    }
}