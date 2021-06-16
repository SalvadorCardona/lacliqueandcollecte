import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/modules/shared/services/container.service";
import RouterService from "App/modules/shared/services/router.service";

export default class RouterComponent extends AppComponent {

    @injector(RouterService)
    private routerService: RouterService;

    public static getComponentName(): string {
        return 'app-router';
    }

    public render(): TemplateResult {
        return html`
            ${this.routerService.rout()}
        `;
    }
}