import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomePartnerListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-partner-list';
    }

    public render(): TemplateResult {
        return html`
            <div>Hello Home app-home-partner-list</div>
        `;
    }
}
