import {AppComponent} from 'App/core/custom.element';
import {PostType} from "App/types/post.type";
import {property} from 'lit-element/lib/decorators';
import {html, TemplateResult} from 'lit-element';
import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";
import IconComponent from "App/modules/shared/components/icon.component";
import ButtonComponent from "App/modules/shared/components/button.component";
import HeaderCartComponent from "App/modules/shared/components/header/header.cart.component";
import ProductClient from "App/core/client/product.client";
import {ProductType} from "App/types/product.type";
import debounce from "lodash.debounce"

export default class HeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-header';
    }

    @property({type: Object})
    private menus?: Array<PostType> = null;

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    @injector(ProductClient)
    private productClient: ProductClient

    @property({type: Object})
    private productList?: ProductType[] = null;

    public connectedCallback(): void {
        this.menus = this.configurationService.configuration.mainMenu;
        super.connectedCallback();
    }

    private renderMenu(): Array<TemplateResult> {
        return this.menus.map(menu => {
            return html`
                <li class="d-inline-block p-1">
                    <a href="${menu.url}">${menu.title}</a>
                </li>
            `;
        });
    }

    private onChange($e: KeyboardEvent): void
    {
        debounce(() => {
            const target = $e.target as HTMLInputElement;

            if (!target.value) return;

            this.productClient.getProducts({search: target.value})
                .then(productList => {
                    this.productList = productList;
                });
        }, 500)();
    }

    private onBlur(): void
    {
        this.productList = null;
    }

    public render(): TemplateResult {
        return html`
            <div class="site-branding
                container
                py-3
                d-none d-xl-flex
                px-4">
                <div class="col-md-6
                    d-flex
                    justify-content-between">
                <span class="site-logo">
                    <a class="site-logo-title
                        text-uppercase
                        fw-bolder
                        text-primary" href="/" title="Home" rel="home">ZARTIZANA</a>
                </span>
                    <div class="search-bar
                    d-inline-block
                    position-relative">
                        <input @keyup=${this.onChange} 
                               @blur=${this.onBlur}
                               type="text" 
                               class="form-control" 
                               placeholder="Trouver votre produit....">
                        ${this.createElement(IconComponent, {classList: 'position-absolute', icon: 'search'})}
                        ${this.getProductList()}
                    </div>
                </div>
                <div class="col-md-6
                    d-flex
                    align-items-center
                    justify-content-end">
                    <nav class="site-navigation 
                        d-flex
                        justify-content-end
                        align-items-center" role="navigation">
                    <ul id="menus-main-menus" class="menus m-0">
                        ${this.renderMenu()}
                    </ul>
                    ${this.createElement(ButtonComponent, {link: '/mon-compte', icon: 'person'})}
                    ${this.createElement(HeaderCartComponent)}
                    </nav>
                </div>
            </div>
        `;
    }

    private getProductList(): TemplateResult|TemplateResult[] {
        if (!this.productList) return html``;

        return html`
            <div class="position-absolute
                    bg-white
                    p-2
                    w-100">
                ${this.productList.map(product => {
                    return html `
                        <div>
                            <a href="${product.permalink}">${product.name}</a>
                        </div>
                    `;
                })}
            </div>
        `;
    }
}

