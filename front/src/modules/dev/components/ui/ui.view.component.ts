import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import buttonTemplate from "App/modules/dev/components/ui/page/templates/ui.button.template";
import textTemplate from "App/modules/dev/components/ui/page/templates/ui.text.template";
import textAroundTemplate from "App/modules/dev/components/ui/page/templates/ui.text.around.template";
import formTemplate from "App/modules/dev/components/ui/page/templates/ui.form.template";
import colorTemplate from "App/modules/dev/components/ui/page/templates/ui.colors.template";
import products from "App/modules/dev/components/ui/page/templates/ui.products.template";
import icons from "App/modules/dev/components/ui/page/templates/ui.icon.template";
import {unsafeHTML} from "lit-html/directives/unsafe-html";

export default class UiViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-ui-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="container">
                <h2>Components</h2>
                <div class="row">
                    ${unsafeHTML(textTemplate)}
                    ${unsafeHTML(textAroundTemplate)}
                    ${unsafeHTML(buttonTemplate)}
                    ${unsafeHTML(colorTemplate)}
                    ${unsafeHTML(formTemplate)}
                    ${unsafeHTML(icons)}
                </div>
            
            <h2>Produit</h2>
                ${unsafeHTML(products)}
            </div>
        `;
    }
}
