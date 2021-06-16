import {AppComponent, getComponentSelector} from "App/modules/shared/services/custom.element";
import EventService, {events} from "App/modules/shared/services/event.service";
import {injector} from "App/modules/shared/services/container.service";
import Kernel from "App/modules/shared/services/kernel";

export default class ComponentService {
    private _components: Array<any>;

    @injector(EventService)
    private eventService: EventService;

    public onInit(): void {
        this.eventService.addSubscriber(events.CONFIGURATION_LOADED, () => {
            this._components = Kernel.components;
            this.loadComponents();
            this.eventService.dispatch(events.COMPONENT_LOADED);
        })
    }

    public loadComponents(): void {
        this._components.forEach(Component => {
            // @ts-ignore
            customElements.define(getComponentSelector(Component), Component);
        });
    }


    public get components(): Array<typeof AppComponent> {
        return this._components;
    }
}