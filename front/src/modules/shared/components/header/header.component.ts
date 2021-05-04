import {AppComponent} from 'App/core/custom.element';
import {PostType} from "App/types/post.type";
import {property} from 'lit-element/lib/decorators';
import {html, TemplateResult} from 'lit-element';
import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";

export default class HeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-header';
    }

    @property({type: Object})
    private menus: Array<PostType>|null = null;

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    public connectedCallback(): void {
        this.menus = this.configurationService.configuration.mainMenu;
        this.classList.add('bg-white', 'd-block');
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
                        text-primary" href="/" title="Home" rel="home">ZARTISANA</a>
                </span>
                    <div class="search-bar
                    d-inline-block
                    position-relative">
                        <input type="text" class="form-control" placeholder="Trouver votre produit....">
                        <app-icon class="position-absolute" icon="search"></app-icon>
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
    
                        <app-button link="/mon-compte" icon="person"></app-button>

                        <app-header-cart></app-header-cart>
                    </nav>
                </div>
            </div>
        `;
    }
}

