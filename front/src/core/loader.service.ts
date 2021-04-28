import {injector, OnInit} from "App/core/container.service";
import EventService, {events} from "App/core/event.service";
import LoaderComponent from "App/modules/shared/components/loader.component";
import {createElement} from "App/core/custom.element";

export default class LoaderService implements OnInit {
    private loaderComponent: LoaderComponent;

    public static classLoaderFixed = 'loader-fixed';

    @injector(EventService)
    private eventService: EventService;

    public onInit(): void {
        this.eventService.addSubscriber(events.SERVICE_LOADED, () => {
            this.setup();

            const loader:HTMLElement = document.querySelector('#loader-application-not-loaded');

            if (loader) {
                loader.remove();
            }
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