import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeProductListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-product-list';
    }

    public render(): TemplateResult {
        return html`
            <div>Hello Home app-home-product-list</div>
        `;
    }
}
