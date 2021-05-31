import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import UiTextComponent from "App/modules/dev/components/ui/ui.text.component";
import UiTextAroundComponent from "App/modules/dev/components/ui/ui.text.around.component";
import UiButtonComponent from "App/modules/dev/components/ui/ui.button.component";
import UiColorsComponent from "App/modules/dev/components/ui/ui.colors.component";
import UiFormComponent from "App/modules/dev/components/ui/ui.form.component";
import UiIconComponent from "App/modules/dev/components/ui/ui.icon.component";
import UiProductsComponent from "App/modules/dev/components/ui/ui.products.component";
import UiListComponentComponent from "App/modules/dev/components/ui/ui.list.component.component";

export default class UiViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-ui-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="container">
                <h2>${this.trans("uiViewComponentTitle")}</h2>
                <div class="row">
                    ${this.createElement(UiTextComponent)}
                    <div class="col-md-4">
                        ${this.createElement(UiTextAroundComponent)}
                    </div>
                    <div class="col-md-4">
                        ${this.createElement(UiButtonComponent)}
                    </div>
                    <div class="col-md-4">
                        ${this.createElement(UiListComponentComponent)}
                    </div>
                    ${this.createElement(UiColorsComponent)}
                    <div class="col-md-8">
                        ${this.createElement(UiFormComponent)}
                    </div>
                    <div class="col-md-4">
                        ${this.createElement(UiIconComponent)}
                    </div>
                </div>

                <h2>${this.trans("uiViewComponentProductsTitle")}</h2>
                ${this.createElement(UiProductsComponent)}
            </div>
        `;
    }
}
