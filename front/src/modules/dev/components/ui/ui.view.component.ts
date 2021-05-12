import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import buttonComponent from "App/modules/dev/components/ui/page/components/ui.button.component";
import UiTextComponent from "App/modules/dev/components/ui/page/components/ui.text.component";
import textAroundComponent from "App/modules/dev/components/ui/page/components/ui.text.around.component";
import formComponent from "App/modules/dev/components/ui/page/components/ui.form.component";
import colorComponent from "App/modules/dev/components/ui/page/components/ui.colors.component";
import products from "App/modules/dev/components/ui/page/components/ui.products.component";
import iconComponent from "App/modules/dev/components/ui/page/components/ui.icon.component";

export default class UiViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-ui-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="container">
                <h2>Components</h2>
                <div class="row">
                    ${this.createElement(UiTextComponent)}
                    ${this.createElement(textAroundComponent)}
                    ${this.createElement(buttonComponent)}
                    ${this.createElement(colorComponent)}
                    ${this.createElement(formComponent)}
                    ${this.createElement(iconComponent)}
                </div>
            
            <h2>Produit</h2>
                ${this.createElement(products)}
            </div>
        `;
    }
}
