import {AppComponent} from "App/types/custom.element";
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
            <main id="main">
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
            case '#home':
                return '<app-home-view></app-home-view>';
            case '#partner':
                return '<app-partner-view partnerPostId="106"></app-partner-view>';
            case '#produit':
                return '<app-product-view productId="139"></app-product-view>';
            default:
                return '<app-ui-view></app-ui-view>';
        }
    }
}
