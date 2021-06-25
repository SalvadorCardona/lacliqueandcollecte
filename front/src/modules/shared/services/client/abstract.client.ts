import ClientService from "App/modules/shared/services/client.service";
import {injector} from "App/modules/shared/services/container.service";

export default abstract class Client {
    @injector(ClientService)
    protected clientHttp: ClientService;
}