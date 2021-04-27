import {ContainerService} from "App/core/container.service";
import modules from "App/app.modules";
import {Component, Service} from "App/types/module.type";

export default class Kernel {
    public static self: Kernel;

    public static components: Component[];

    private containerService: ContainerService;

    public static get(): Kernel
    {
        if (!this.self) {
            this.self = new Kernel();
        }

        return this.self;
    }

    public setup(): void {
        Kernel.components = this.extractToModule('components');

        this.containerService = ContainerService.get();

        // @ts-ignore
        this.containerService.serviceList = this.extractToModule('services');

        this.containerService.loadService();
    }

    private extractToModule(key: 'services'|'components'): Array<Service|Component> {
        const modulesContent = [];
        modules.forEach(module => module[key]?.forEach(moduleContent => modulesContent.push(moduleContent)));

        return modulesContent;
    }
}