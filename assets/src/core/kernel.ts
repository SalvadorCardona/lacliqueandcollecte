import {ServiceContainer} from "App/core/service.container";
import {events, EventService} from "App/core/event.service";
import {ComponentService} from "App/core/component.service";

export default class Kernel {
    public static self: Kernel;
    private serviceContainer: ServiceContainer;

    constructor() {
        this.serviceContainer = ServiceContainer.get();
    }

    static get(): Kernel
    {
        if (!this.self) {
            this.self = (new Kernel());
        }

        return this.self;
    }

    setup() {
        this.serviceContainer.loadService();

        let eventService: EventService = this.serviceContainer.service(EventService);

        eventService.dispatch(events.SERVICE_MOUNTED);

        let componentService: ComponentService = this.serviceContainer.service(ComponentService);

        componentService.loadComponents();

        eventService.dispatch(events.COMPONENT_MOUNTED);
    }
}