import axios, {AxiosInstance, AxiosResponse, Method} from 'axios'
import {getApiEndpoint, keysToCamel} from "App/modules/shared/services/helper";
import {injector, OnInit} from "App/modules/shared/services/container.service";
import ConfigurationService from "App/modules/shared/services/configuration.service";

export default class ClientService implements OnInit {
    public http: AxiosInstance;

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

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
            if (this.configurationService.configuration.wcStoreApi) {
                response.headers['X-WC-Store-API-Nonce'] = this.configurationService.configuration.wcStoreApi || null;
            }

            if (this.configurationService.configuration.wpApiKey) {
                response.headers['X-WP-Nonce'] = this.configurationService.configuration.wpApiKey || null;
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