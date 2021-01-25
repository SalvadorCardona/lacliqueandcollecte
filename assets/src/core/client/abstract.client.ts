import ClientService from "App/core/client.service";

export default abstract class Client {
    private clientHttp: ClientService;

    public constructor(clientHttp: ClientService) {
        this.clientHttp = clientHttp;
    }
}