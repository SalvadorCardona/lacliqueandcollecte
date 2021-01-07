import ServiceContainer, {OnInit} from "App/core/service.container";
import components from "App/app.components";
import {events, EventService} from "App/core/event.service";

export class ComponentService implements OnInit {
    private components: Array<any> = components

    onInit(serviceContainer: ServiceContainer): void {
        let eventService: EventService = serviceContainer.service(EventService);
        eventService.addSubscriber(events.SERVICE_READY, () => this.mountComponents());
    }

    private mountComponents() {
        this.components.forEach(Component => {
            customElements.define(Component.getSelectorName(), Component);
        });
    }
}