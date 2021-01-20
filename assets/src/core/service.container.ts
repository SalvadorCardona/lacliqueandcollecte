import services from "App/app.services";

export interface OnInit {
    onInit(serviceContainer: ServiceContainer): void;
}

type Service = {new (): Service}
type ServiceReference<Service> = Function

export class ServiceContainer {
    public static self: ServiceContainer;

    private container: Array<Service> = [];

    private serviceList: Array<any> = services;

    public loadService(): void
    {
        this.container = this.serviceList.map(Service => {
            return new Service()
        });

        this.container.forEach(service => {
            if (typeof service.onInit === 'function') {
                service.onInit(this);
            }
        });
    }

    static get(): ServiceContainer
    {
        if (!this.self) {
            this.self = (new ServiceContainer());
        }

        return this.self;
    }

    public service<T>(classReference: ServiceReference<T>): T|null {
        // @ts-ignore
        return this.container.find(elem => elem instanceof classReference) as T || null;
    }
}
