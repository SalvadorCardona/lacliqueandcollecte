import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {environment} from "App/environement/environement";
import {keysToCamel} from "App/shared/helper";
import ClientProduct from "App/core/client/client.product";

export default class ClientHttp {
    static self: ClientHttp;
    public http: AxiosInstance;

    public product: ClientProduct;

    public constructor() {
        this.http = axios.create({
            baseURL: environment.apiEndpoint,
            headers: {
                'content-type': 'application/json',
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
        this.product = new ClientProduct(this);
    }

    static get(): ClientHttp
    {
        if (!this.self) {
            this.self = (new ClientHttp());
        }

        return this.self;
    }

    public send(method: string, route: string, data: any = []): Promise<AxiosResponse> {
        return this.http[method](route, {params: data});
    }
}