import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {MiddlewareConfigurationType} from "App/types/middleware.configuration.type";

export default class ApplicationClient extends Abstract {
    public getConfiguration(): Promise<MiddlewareConfigurationType> {
        return this.clientHttp.send('get', environment.apiEndpoints.application.configuration)
          .then(response => response.data as MiddlewareConfigurationType);
    }
}