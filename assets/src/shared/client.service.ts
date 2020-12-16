import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {environment} from "App/environement/environement";
import {keysToCamel} from "App/shared/helper";

export default class ClientHttp {
    static self: ClientHttp;
    public http: AxiosInstance;

    public constructor() {
        this.http = axios.create({
            baseURL: environment.apiEndpoint,
            headers: {
                'content-type': 'application/json',
            }
        });

        this.http.interceptors.response.use((response: AxiosResponse) => {
            console.log('r', response)
            if (
                response.data
            ) {
                response.data = keysToCamel(response.data);
            }

            return response;
        });
    }

    static get(): ClientHttp
    {
        if (!this.self) {
            this.self = (new ClientHttp());
        }

        return this.self;
    }

    public send(method: string, route: string, data: any = []): Promise<AxiosResponse> {
        return this.http[method](route, data);
    }

    public getProductsByAuthor(idAuthor: number): Promise<AxiosResponse> {
        return this.send('get', environment.apiEndpoints.productsByAuthorId.replace('{id}', idAuthor.toString()));
    }

    public getProducts(): Promise<AxiosResponse> {
        return this.send('get', environment.apiEndpoints.getProducts);
    }
}