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
            <div class="dropdown">
                <button class="btn btn-primary" >
                    Liste des pages templates
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a @click="${this.redirect}" class="dropdown-item" href="#">Composants</a></li>
                    <li><a @click="${this.redirect}" class="dropdown-item" href="#partner">Partenaire</a></li>
                    <li><a @click="${this.redirect}" class="dropdown-item" href="#produit">Produit</a></li>
                </ul>
            </div>
        <main id="main" class="container">
            ${unsafeHTML(this.router())}
        </main>
        `;
    }

    private redirect(): void {
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
