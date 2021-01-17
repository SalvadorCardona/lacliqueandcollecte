import {AppComponent} from "App/components/custom.element";
import componentView from "App/modules/ui/views/ui.views.components";
import partnerViews from "App/modules/ui/views/ui.partner.views.components";
import productViews from "App/modules/ui/views/ui.product.views.components";
import { html, property } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class UiComponent extends AppComponent {
    @property({type: String})
    private route: string;

    public render()
    {
        return html`
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


    private redirect() {
        setTimeout(_ => this.router(), 100);
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
