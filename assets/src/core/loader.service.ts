import {ContainerService, OnInit} from "App/core/container.service";
import {events, EventService} from "App/core/event.service";
import LoaderComponent from "App/components/shared/loader.component";
import {createElement} from "App/components/custom.element";
import { injectable } from "inversify";

@injectable()
export class LoaderService implements OnInit {

    private loaderComponent: LoaderComponent;
    public static idLoaderComponent: string = 'loader-component-id';

    onInit(containerService: ContainerService): void {
        let eventService: EventService = containerService.service(EventService);
        eventService.addSubscriber(events.SERVICE_MOUNTED, () => this.setup());
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