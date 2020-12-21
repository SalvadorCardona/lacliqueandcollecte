import {AppHtmlElement, CustomElement} from "App/components/custom.element";
import buttonTemplate from "App/modules/ui/components/template/ui.button.template";
import textTemplate from "App/modules/ui/components/template/ui.text.template";
import formTemplate from "App/modules/ui/components/template/ui.form.template";
import colorTemplate from "App/modules/ui/components/template/ui.colors.template";
import products from "App/modules/ui/components/template/ui.products.template";
import icons from "App/modules/ui/components/template/ui.icon.template";

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
            <h2>Components</h2>
            <div class="row">
                ${textTemplate}
                ${buttonTemplate}
                ${colorTemplate}
                ${formTemplate}
                ${icons}
            </div>
            
            <h2>Produit</h2>
                ${products}
            </div>
        </main>
        `;
    }
}
