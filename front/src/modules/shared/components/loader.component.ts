import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

<<<<<<< HEAD:front/src/modules/shared/components/loader.component.ts
export default class LoaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-loader';
=======
export default class PartnerRequestViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-request-view';
>>>>>>> rename file:front/src/modules/partner-request/components/partner.request.view.component.ts
    }

    public render(): TemplateResult {
        return html`<div class="donut-spinner"></div>`;
    }
}