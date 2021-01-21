

export interface OnInit {
    onInit(containerService: ContainerService): void;
}

type Service = {
    onInit;
}

export class ContainerService {
    set serviceList(value: Array<any>) {
        this._serviceList = value;
    }
    public static self: ContainerService;

    private container: Array<Service> = [];

    private _serviceList: Array<any>;

    public loadService(): void
    {
        this.container = this._serviceList.map(Service => {
            return new Service()
        });

        this.container.forEach(service => {
            if (typeof service.onInit === 'function') {
                service.onInit(this);
            }
        });
    }

    static get(): ContainerService
    {
        if (!this.self) {
            this.self = (new ContainerService());
        }

        return this.self;
    }

    public service<T>(classReference: Function): T|null {
        // @ts-ignore
        return this.container.find(elem => elem instanceof classReference) as T || null;
    }
}
