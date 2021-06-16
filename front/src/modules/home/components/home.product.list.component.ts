import {AppComponent} from 'App/modules/shared/services/custom.element';
import {html, TemplateResult} from 'lit-element';
import ProductLoopComponent from "App/modules/shared/components/product/product.loop.component";

export default class HomeProductListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-product-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container
                mt-5
                p-5
                text-center">
                <h2 class="title-border">${this.trans("home.product.list.title")}</h2>
                ${this.createElement(ProductLoopComponent)}
            </div>
        `;
    }
}
