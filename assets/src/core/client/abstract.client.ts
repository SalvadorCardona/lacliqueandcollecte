import ClientService from "App/core/client.service";
import { injector} from "App/core/container.service";

export default abstract class Client {
    @injector(ClientService)
    protected clientHttp: ClientService;
}