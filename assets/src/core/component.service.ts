import {AppComponent, getComponentSelector} from "App/components/custom.element";
import {events, EventService} from "App/core/event.service";
import {injector} from "App/core/container.service";
import Kernel from "App/core/kernel";

export class ComponentService {
    private _components: Array<typeof AppComponent>;

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