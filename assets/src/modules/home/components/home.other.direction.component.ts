import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeOtherDirectionComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-other-direction';
    }

    public render(): TemplateResult {
        return html`
            <div>Hello Home app-home-other-direction</div>
        `;
    }
}
