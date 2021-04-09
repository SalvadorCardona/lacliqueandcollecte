import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-view';
    }

    public render(): TemplateResult {
        return html`
            <div>Hello Home Page</div>
        `;
    }
}
