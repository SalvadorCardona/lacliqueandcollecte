import axios, {AxiosInstance, AxiosResponse, Method} from 'axios'
import {getApiEndpoint, keysToCamel} from "App/core/helper";
import {ContainerService, OnInit} from "App/core/container.service";
import {ConfigurationService} from "App/core/configuration.service";

export default class ClientService implements OnInit {
    public http: AxiosInstance;

    public send(method: Method, route: string, data: any = {}): Promise<AxiosResponse> {
        return this.http[method](route, data);
    }

    public onInit(): void {
        this.http = axios.create({
            baseURL: getApiEndpoint(),
            headers: {
                'accept': 'application/json'
            }
        });

        this.http.interceptors.request.use((response: AxiosResponse) => {
            const containerService = ContainerService.get();
            const configurationService: ConfigurationService = containerService.configurationService;

            if (configurationService.configuration.wcStoreApi) {
                response.headers['X-WC-Store-API-Nonce'] = configurationService.configuration.wcStoreApi || null;
            }

            if (configurationService.configuration.wpApiKey) {
                response.headers['X-WP-Nonce'] = configurationService.configuration.wpApiKey || null;
            } else {
                if (window['Settings'] && window['Settings'].nonce)
                response.headers['X-WP-Nonce'] = window['Settings'].nonce;
            }

            return response;
        });

        this.http.interceptors.response.use((response: AxiosResponse) => {
            if (response.data) response.data = keysToCamel(response.data);

            return response;
        });
    }
}