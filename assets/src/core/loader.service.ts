import {ServiceContainer, OnInit} from "App/core/service.container";
import {events, EventService} from "App/core/event.service";
import LoaderComponent from "App/components/shared/loader.component";
import {createElement} from "App/components/custom.element";

export class LoaderService implements OnInit {

    private loaderComponent: LoaderComponent;
    public static idLoaderComponent: string = 'loader-component-id';

    onInit(serviceContainer: ServiceContainer): void {
        let eventService: EventService = serviceContainer.service(EventService);
        eventService.addSubscriber(events.SERVICE_READY, () => this.setup());
    }

    private setup(): void {
        this.loaderComponent = createElement(LoaderComponent);
        this.loaderComponent.id = LoaderService.idLoaderComponent;
        document.body.append(this.loaderComponent);
        this.hide();
    }

    public show(): void {
        this.loaderComponent.hidden = false;
        document.body.classList.add('in-loading');
        document.body.classList.remove('out-loading');
    }

    public hide(): void {
        this.loaderComponent.hidden = true;
        document.body.classList.remove('in-loading');
        document.body.classList.add('out-loading');
    }
}