import axios, {AxiosInstance, AxiosResponse, Method} from 'axios'
import {getApiEndpoint, keysToCamel} from "App/shared/helper";
import {getMiddleware} from "App/types/middleware.configuration.type";

export default class ClientService {
    public http: AxiosInstance;

    public constructor() {
        this.http = axios.create({
            baseURL: getApiEndpoint(),
            headers: {
                'accept': 'application/json',
                'X-WC-Store-API-Nonce': getMiddleware().wcStoreApi,
            }
        });

        this.http.interceptors.response.use((response: AxiosResponse) => {
            if (response.data) response.data = keysToCamel(response.data);

            return response;
        });
    }

    public send(method: Method, route: string, data: any = {}): Promise<AxiosResponse> {
        return this.http[method](route, data);
    }
}