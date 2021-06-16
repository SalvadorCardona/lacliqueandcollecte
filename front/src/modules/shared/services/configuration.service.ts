import {injector, OnInit} from "App/modules/shared/services/container.service";
import {MiddlewareConfigurationType} from "App/types/middleware.configuration.type";
import EventService, {events} from "App/modules/shared/services/event.service";

export default class ConfigurationService implements OnInit {

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
    }
}
