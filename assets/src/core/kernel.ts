import {ContainerService} from "App/core/container.service";
import services from "App/app.services";
import components from "App/app.components";

export default class Kernel {
    public static self: Kernel;

    public static components = components;

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

        // @ts-ignore
        this.containerService.serviceList = services;

        this.containerService.loadService();
    }
}