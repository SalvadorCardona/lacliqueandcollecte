import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class PartnerRequestViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-request-view';
    }

    public render(): TemplateResult {
        return html`
            <span>Hello World</span>
        `;
    }
}