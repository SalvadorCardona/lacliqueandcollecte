import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {environment} from "App/environement/environement";
import {keysToCamel} from "App/shared/helper";
import ClientProduct from "App/core/client/client.product";
import ClientCart from "App/core/client/client.cart";


export default class ClientService {
    static self: ClientService;
    public http: AxiosInstance;

    public product: ClientProduct;
    public cart: ClientCart;

    public constructor() {
        this.http = axios.create({
            baseURL: environment.apiEndpoint,
            headers: {
                'content-type': 'application/json',
                'X-WC-Store-API-Nonce': '_nonce',
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

    static get(): ClientService
    {
        if (!this.self) {
            this.self = (new ClientService());
        }

        return this.self;
    }

    public send(method: string, route: string, data: any = []): Promise<AxiosResponse> {
        return this.http[method](route, {params: data});
    }
}