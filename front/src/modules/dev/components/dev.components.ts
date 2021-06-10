import {AppComponent} from "App/core/custom.element";
import {html, property, TemplateResult} from "lit-element";
import DevMenuComponent from "App/modules/dev/components/dev.menu.component";
import HomeViewComponent from "App/modules/home/components/home.view.component";
import SearchViewComponent from "App/modules/search/components/search.view.component";
import UiViewComponent from "App/modules/dev/components/ui/ui.view.component";
import ProductViewComponent from "App/modules/product/components/product.view.component";
import PartnerViewComponent from "App/modules/partner/components/partner.view.component";

export default class DevComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-dev';
    }

    @property({type: String})
    private route: string;

    public render(): TemplateResult {
        return html`
            ${this.createElement(DevMenuComponent, {classList:'position-fixed start-0 top-0 min-vh-100'})}
            <main id="main">
                ${this.router()}
            </main>
        `;
    }

    public redirect(): void {
        setTimeout(() => this.router(), 100);
    }

    private router(): AppComponent {
        this.route = window.location.hash;

        switch (this.route) {
            case this.trans("ui.dev.component.route.home"):
                return this.createElement(HomeViewComponent);
            case this.trans("ui.dev.component.route.search"):
                return this.createElement(SearchViewComponent);
            case this.trans("ui.dev.component.route.partner"):
                return this.createElement(PartnerViewComponent, {partnerPostId: 106});
            case this.trans("ui.dev.component.route.produit"):
                return this.createElement(ProductViewComponent, {productId: 139});
            default:
                return this.createElement(UiViewComponent);
        }
    }
}
