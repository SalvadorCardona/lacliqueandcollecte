import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeArgumentativeComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-argumentative';
    }

    public render(): TemplateResult {
        return html`
            <div></div>
        `;
    }
}
