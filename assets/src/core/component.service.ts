import components from "App/app.components";
import {AppComponent, getComponentSelector} from "App/components/custom.element";
import {events, EventService} from "App/core/event.service";
import {injector} from "App/core/container.service";

export class ComponentService {
    private components: Array<typeof AppComponent> = components

    @injector(EventService)
    private eventService: EventService;

    public onInit(): void {
        this.eventService.addSubscriber(events.CONFIGURATION_LOADED, () => {
            this.loadComponents();
            this.eventService.dispatch(events.COMPONENT_LOADED);
        })
    }

    public loadComponents(): void {
        this.components.forEach(Component => {
            // @ts-ignore
            customElements.define(getComponentSelector(Component), Component);
        });
    }
}