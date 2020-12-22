import {AppHtmlElement, CustomElement} from "App/components/custom.element";
import componentView from "App/modules/ui/views/ui.views.components";
import componentPartner from "App/modules/ui/views/partner.views.components";

@CustomElement()
export default class UiComponent extends AppHtmlElement {
    static selector = 'app-home';

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render(): string
    {
        return `
        <main id="main" class="container mt-5">
            ${this.router()}
        </main>
        `;
    }

    router(): string {
        let route = window.location.pathname;

        switch (route) {
            case '/partner':
                return componentPartner;
                break;
            default:
                return componentView;
        }
    }
}
