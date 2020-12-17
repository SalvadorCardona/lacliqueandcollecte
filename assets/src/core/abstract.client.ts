import ClientHttp from "App/core/client.service";

export default abstract class Client {
    protected constructor(readonly clientHttp: ClientHttp) {}
}