import ApplicationClient from "App/core/client/application.client";
import {injector, OnInit} from "App/core/container.service";
import {MiddlewareConfigurationType} from "App/types/middleware.configuration.type";
import {events, EventService} from "App/core/event.service";

export class ConfigurationService implements OnInit {
    @injector(ApplicationClient)
    private applicationClient: ApplicationClient;
    @injector(EventService)
    private eventService: EventService;

    private _configuration: MiddlewareConfigurationType;

    public onInit(): void {
        this.applicationClient.getConfiguration()
            .then(middleWareConfiguration => {
                this._configuration = middleWareConfiguration;
                this.eventService.dispatch(events.CONFIGURATION_LOADED);
            })
    }

    get configuration(): MiddlewareConfigurationType {
      return this._configuration;
    }
}