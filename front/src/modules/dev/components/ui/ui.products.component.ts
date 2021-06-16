import {AppComponent} from "App/modules/shared/services/custom.element";
import ProductLoopComponent from "App/modules/shared/components/product/product.loop.component";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";

export default class UiProductsComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-products-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent, {
            classList: 'no-background',
            body: html`${this.createElement(ProductLoopComponent)}`
        })}
        `;
    }
}
