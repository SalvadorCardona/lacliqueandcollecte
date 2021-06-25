import "reflect-metadata";
import ModuleService from "App/modules/shared/services/module.service";
import EventService, {events} from "App/modules/shared/services/event.service";
import ComponentService from "App/modules/shared/services/component.service";
import {ContainerService} from "App/modules/shared/services/container.service";
import SharedModule from "App/modules/shared/shared.modules";

export default class Kernel {
    public static self: Kernel;

    private containerService: ContainerService;

    public static get(): Kernel
    {
        if (!this.self) {
            this.self = new Kernel();
        }

        return this.self;
    }

    public setup(): void {
        this.containerService = ContainerService.get();
        this.containerService.addServices([ModuleService, EventService, ComponentService]);

        const moduleService = this.containerService.service(ModuleService);

        moduleService.addModule(SharedModule);

        const eventService = this.containerService.service(EventService);

        eventService.dispatch(events.APPLICATION_LOADED);
    }
}

const kernel = Kernel.get();

kernel.setup();
