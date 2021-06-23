import {AppComponent, getComponentSelector} from "App/modules/shared/services/custom.element";
import EventService from "App/modules/shared/services/event.service";
import {injector} from "App/modules/shared/services/container.service";
import {ComponentName} from "App/modules/shared/types/module.type";

export default class ComponentService {
    private _components: Array<() => AppComponent>;

    @injector(EventService)
    private eventService: EventService;

    public addComponent(components: Array<ComponentName>): void {
        components.forEach(Component => {
            customElements.define(getComponentSelector(Component), Component);
        });
    }

    public get components(): Array<() => AppComponent> {
        return this._components;
    }
}