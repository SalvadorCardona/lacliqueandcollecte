import EventService, {events} from "App/modules/shared/services/event.service";
import {Service, ServiceName} from "App/modules/shared/types/module.type";

export interface OnInit {
    onInit(containerService: ContainerService): void;
}

export function injector(service: ServiceName): Service {
    return function (): any {
        return {
            get: (): Service => ContainerService.get().service(service)
        }
    };
}

export class ContainerService {
    public static self: ContainerService;

    private container: Array<Service> = [];

    public addServices(services: Array<ServiceName>): void {
        const servicesMounted = services.map(Service => {
            return new Service();
        });

        servicesMounted.forEach(service => {
            if (service['onInit']) {
                service['onInit'](this);
            }
        });

        this.container = [...this.container, ...servicesMounted];

        const eventService: EventService = this.service(EventService);
        eventService.dispatch(events.SERVICE_LOADED);
    }

    public static get(): ContainerService
    {
        if (!this.self) {
            this.self = (new ContainerService());
        }

        return this.self;
    }

    public service(classReference: ServiceName): Service|null {
        if (classReference === ContainerService) {

            return ContainerService.get();
        }

        return this.container.find(elem => elem instanceof classReference) || null;
    }
}
