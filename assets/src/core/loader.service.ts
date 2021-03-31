import {injector, OnInit} from "App/core/container.service";
import {events, EventService} from "App/core/event.service";
import LoaderComponent from "App/components/shared/loader.component";
import {createElement} from "App/components/custom.element";

export class LoaderService implements OnInit {
    private loaderComponent: LoaderComponent;

    public static idLoaderComponent = 'loader-component-id';

    @injector(EventService)
    private eventService: EventService;

    public onInit(): void {
        this.eventService.addSubscriber(events.SERVICE_LOADED, () => this.setup());
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