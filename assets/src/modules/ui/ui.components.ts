import {AppHtmlElement, CustomElement} from "App/components/custom.element";
import componentView from "App/modules/ui/views/ui.views.components";
import partnerViews from "App/modules/ui/views/ui.partner.views.components";
import productViews from "App/modules/ui/views/ui.product.views.components";

@CustomElement()
export default class UiComponent extends AppHtmlElement {
    static selector = 'app-ui-template';

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render(): string
    {
        return `
        <main id="main" class="container">
            ${this.router()}
        </main>
        `;
    }

    router(): string {
        let route = window.location.hash;

        switch (route) {
            case '#partner':
                return partnerViews;
            case '#produit':
                return productViews;
            default:
                return componentView;
        }
    }
}
