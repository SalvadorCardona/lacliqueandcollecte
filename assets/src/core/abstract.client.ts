import ClientService from "App/core/client.service";

export default abstract class Client {
    public constructor(readonly clientHttp: ClientService) {}
}