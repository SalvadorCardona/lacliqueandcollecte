import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class RequestPartnerViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-request-partner-view';
    }

    public render(): TemplateResult {
        return html`
            <span>Hello World</span>
        `;
    }
}