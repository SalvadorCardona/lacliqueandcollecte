export interface OnInit {
    onInit(containerService: ContainerService): void;
}

export type Class = { new(): Class; };

export interface Type<T> {
    new (...args: any[]): T;
}

export function injector<Class>(service: Type<Class>): any {
    return function (): any {
        return {
            get: (): Class => ContainerService.get().service(service)
        }
    };
}

export class ContainerService {
    public set serviceList(value: Array<Class>) {
        this._serviceList = value;
    }

    public static self: ContainerService;

    private container: Array<Class> = [];

    private _serviceList: Array<Type<Class>>;

    public loadService(): void
    {
        this.container = this._serviceList.map(Service => {
            return new Service()
        });

        this.container.forEach(service => {
            if (service['onInit']) {
                service['onInit'](this);
            }
        });
    }

    public static get(): ContainerService
    {
        if (!this.self) {
            this.self = (new ContainerService());
        }

        return this.self;
    }

    public service<Class>(classReference: Type<Class>): Class|null {
        // @ts-ignore
        return this.container.find(elem => elem instanceof classReference) || null;
    }
}
