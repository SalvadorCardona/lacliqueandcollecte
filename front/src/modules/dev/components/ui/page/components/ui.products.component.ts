import { AppComponent } from "App/core/custom.element";
import ProductLoopComponent from "App/modules/shared/components/product/product.loop.component";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import { html, TemplateResult } from "lit-element";

export default class products extends AppComponent {
    public static getComponentName(): string {
        return 'app-products-view';
    }

    public render(): TemplateResult {
        return html`
        <div class="col-12">
            ${this.createElement(WrapperComponent, {classList: '[no-background]', body: html`${this.createElement(ProductLoopComponent)}`})}
        </div>
        `;
    }
}