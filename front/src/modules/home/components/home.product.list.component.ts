import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeProductListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-product-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container p-5 text-center">
                <h2 class="title
                    text-primary
                    text-uppercase">Nos produits</h2>
                <app-product-loop></app-product-loop>
            </div>
        `;
    }
}