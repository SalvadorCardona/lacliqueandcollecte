import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";


export default class UiProductsComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-ui-products;
    }

    public render(): TemplateResult {
        return html`
            <div class="col-12">
                ${this.createElement(WrapperComponent, {
                    body: html `
                        <app-product-loop></app-product-loop>
                        $thi
                    `
                })}
                <app-wrapper class="no-background">
                    <app-product-loop></app-product-loop>
                </app-wrapper>
            </div>
        `;
    }
}
