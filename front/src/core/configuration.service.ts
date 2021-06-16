import ApplicationClient from "App/core/client/application.client";
import {injector, OnInit} from "App/core/container.service";
import {MiddlewareConfigurationType} from "App/types/middleware.configuration.type";
import EventService, {events} from "App/core/event.service";

export default class ConfigurationService implements OnInit {

    @injector(ApplicationClient)
    private applicationClient: ApplicationClient;

    @injector(EventService)
    private eventService: EventService;

    private _configuration: MiddlewareConfigurationType = {} as MiddlewareConfigurationType;

    public set configuration(value: MiddlewareConfigurationType) {
        this._configuration = value as MiddlewareConfigurationType;
    }

    public get configuration(): MiddlewareConfigurationType {
        return this._configuration;
    }
    
    public onInit(): void {
        if (window['middlewareConfiguration']) {
            this.configuration = window['middlewareConfiguration'];
            this.eventService.dispatch(events.CONFIGURATION_LOADED);
            return;
        }

        this.applicationClient.getConfiguration()
            .then(middleWareConfiguration => {
                this.configuration = middleWareConfiguration;
                this.eventService.dispatch(events.CONFIGURATION_LOADED);
            })
    }
}
