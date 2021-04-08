import {AppComponent} from "App/components/custom.element";
import componentView from "App/modules/dev/components/dev/page/components.templates/components.page";
import partnerViews from "App/modules/dev/components/dev/page/partner.page";
import productViews from "App/modules/dev/components/dev/page/product.page";
import {html, property , TemplateResult} from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class DevComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-dev';
    }

    @property({type: String})
    private route: string;

    public render(): TemplateResult {
        return html`
            <app-dev-application></app-dev-application>
            <main id="main" class="container">
                ${unsafeHTML(this.router())}
            </main>
        `;
    }

    public redirect(): void {
        setTimeout(() => this.router(), 100);
    }

    private router(): string {
        this.route = window.location.hash;

        switch (this.route) {
            case '#partner':
                return partnerViews;
            case '#produit':
                return productViews;
            default:
                return componentView;
        }
    }
}
