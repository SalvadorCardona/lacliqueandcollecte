import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/modules/shared/services/container.service";
import RouterService from "App/modules/shared/services/router.service";
import LoaderService from "App/modules/shared/services/loader.service";
import HeaderComponent from "App/modules/shared/components/header/header.component";
import FooterComponent from "App/modules/shared/components/footer/footer.component";
import EventService, {events} from "App/modules/shared/services/event.service";

export default class RouterComponent extends AppComponent {

    @injector(RouterService)
    private routerService: RouterService;

    @injector(LoaderService)
    private loaderService: LoaderService;

    @property({type: HTMLElement})
    private content: AppComponent|null;

    @injector(EventService)
    private eventService: EventService;

    public static getComponentName(): string {
        return 'app-router';
    }

    public connectedCallback(): void {
        this.eventService.addSubscriber(events.SERVICE_LOADED, () => {
            this.loaderService.show();

            this.routerService.rout()
                .then(component => {
                    this.content = component;
                    this.loaderService.hide();
                })
            super.connectedCallback();
        });
    }

    public render(): TemplateResult {
        return html`
            <header class="position-sticky top-0 bg-white" role="banner">
                ${this.createElement(HeaderComponent)}
            </header>
            ${this.content}
            <footer id="site-footer" class="site-footer" role="contentinfo">
                ${this.createElement(FooterComponent)}
            </footer>
        `;
    }
}