import ClientService from "App/core/client.service";
import CartService from "App/core/cart.service";
import {events, EventService} from "App/core/event.service";

export interface OnInit {
    onInit(serviceContainer: ServiceContainer): void;
}

export default class ServiceContainer {
    public static self: ServiceContainer;

    private container: Array<any> = [];

    private serviceList: Array<any> = [
        EventService,
        ClientService,
        CartService,
    ]

    public mount(): void
    {
        this.container = this.serviceList.map(Service => {
            return new Service()
        });

        this.container.forEach(service => {
            if (typeof service.onInit === 'function') {
                service.onInit(this);
            }
        });

        this.service<EventService>(EventService).dispatch(events.SERVICE_READY);
    }

    static get(): ServiceContainer
    {
        if (!this.self) {
            this.self = (new ServiceContainer());
        }

        return this.self;
    }

    public service<T>(className): T|null {
        return this.container.find(elem => elem instanceof className) || null;
    }
}