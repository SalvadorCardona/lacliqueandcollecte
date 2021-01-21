import {ContainerService} from "App/core/container.service";
import {events, EventService} from "App/core/event.service";
import {ComponentService} from "App/core/component.service";
import services from "App/app.services";

export default class Kernel {
    public static self: Kernel;
    private containerService: ContainerService;

    static get(): Kernel
    {
        if (!this.self) {
            this.self = (new Kernel());
        }

        return this.self;
    }

    public setup(): void {
        this.containerService = ContainerService.get();
        this.containerService.serviceList = services;

        this.containerService.loadService();
        const eventService: EventService = this.containerService.service(EventService);

        eventService.dispatch(events.SERVICE_MOUNTED);

        const componentService: ComponentService = this.containerService.service(ComponentService);

        componentService.loadComponents();

        eventService.dispatch(events.COMPONENT_MOUNTED);
    }
}