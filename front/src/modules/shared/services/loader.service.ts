import {injector, OnInit} from "App/modules/shared/services/container.service";
import EventService, {events} from "App/modules/shared/services/event.service";
import LoaderComponent from "App/modules/shared/components/loader.component";
import {createElement} from "App/modules/shared/services/custom.element";

export default class LoaderService implements OnInit {
    private loaderComponent: LoaderComponent;

    public static classLoaderFixed = 'loader-fixed';

    @injector(EventService)
    private eventService: EventService;

    public onInit(): void {
        this.eventService.addSubscriber(events.SERVICE_LOADED, () => {
            const loader:HTMLElement = document.querySelector('.loader-application');

            if (loader) {
                loader.remove();
            }

            this.setup();
        });
    }

    private setup(): void {
        this.loaderComponent = createElement(LoaderComponent);
        this.loaderComponent.classList.add(LoaderService.classLoaderFixed);
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