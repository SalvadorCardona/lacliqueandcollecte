import Module, {ComponentName, Service} from "App/modules/shared/types/module.type";
import {ContainerService, injector} from "App/modules/shared/services/container.service";
import ComponentService from "App/modules/shared/services/component.service";

export default class ModuleService {
    private module: Array<Module> = [];

    @injector(ContainerService)
    private containerService: ContainerService;

    @injector(ComponentService)
    private componentService: ComponentService;

    public addModule(module: Module): void
    {
        this.module.push(module);

        this.componentService.addComponent(this.extractToModule(module, 'components'));

        this.containerService.addServices(this.extractToModule(module, 'services'));
    }

    private extractToModule(module: Module, key: 'services'|'components'): Array<Service|ComponentName> {
        const modulesContent = [];
        module[key]?.forEach(moduleContent => modulesContent.push(moduleContent));

        return modulesContent;
    }
}