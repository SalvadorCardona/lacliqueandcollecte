import {AppComponent} from 'App/core/custom.element';
import {property} from "lit-element/lib/decorators";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";
import IconComponent from "App/modules/shared/components/icon.component";
import {Collapse} from 'bootstrap';
import {Category} from "App/types/product.type";
import {Color} from "App/enum/color.enum";

//TODO: Change icon's color

export default class HeaderMobileComponent extends AppComponent {
    private selector: string = 'menu-mobile';

    private collapseSelector:string='menu-collapse';

    private categoriesCollapse:string='categories-collapse';

    public static getComponentName(): string {
        return 'app-header-mobile';
    }

    @property()
    private categories?: Array<Category> = null;

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;


    public connectedCallback(): void {
        super.connectedCallback();
        this.categories = this.configurationService.configuration.productsCategories;
    }


    private renderProductCategory(category: Category): TemplateResult {
        return html`
            <a href="${category.url}">
                <li class="nav-item text-body">${category.name}</li>
            </a>
        `;
    }

    public firstUpdated() {
        new Collapse(this.querySelector(`#${this.selector}`));

    }

    public render(): TemplateResult {
        return html`
            <nav class="navbar navbar-light fixed-top" id="${this.selector}">
                <div class="container-fluid">
                    <button class="border-0 bg-transparent"
                            id="btn-menu-responsive"
                            type="button"
                            data-bs-toggle="collapse"
                            data-mdb-toggle="collapse"
                            aria-label="Toggle navigation"
                            data-bs-target="#${this.collapseSelector}"
                            aria-expanded="false"
                            aria-controls="${this.collapseSelector}">
                        ${this.createElement(IconComponent, {
                            icon: 'biList',
                            color: Color.PRIMARY,
                            height: '32px',
                            width: '32px'
                        })}
                    </button>

                    <span class="site-logo align-right">
                            <a class="site-logo-title
                                text-uppercase
                                fw-bolder
                                text-primary "
                               href="/" title="Home"
                               rel="home"><div class="text-right">${this.trans("headerComponentZartizana")}</div></a>
                        </span>


                    <div class="container 
                         collapse 
                         navbar-collapse"
                         id="${this.collapseSelector}">
                        <ul class="navbar-nav 
                               me-auto 
                               mb-2 
                               mb-lg-0">
                            <li class="nav-item active">
                                <a href="#">
                                    <div class="row mt-4">
                                        <div class="col-1">${this.createElement(IconComponent, {
                                            color: Color.PRIMARY,
                                            icon: this.trans("headerComponentSearchIcon"), height: '20px',
                                            width: '20px'
                                        })}
                                        </div>

                                        <div class="col-1 text-body fw-bolder">Rechercher
                                        </div>
                                        <div class="w-auto">
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/devenir-partenaire">
                                    <div class="row mt-1 pt-1 ">
                                        <div class="col-1">${this.createElement(IconComponent, {
                                            color: Color.PRIMARY,
                                            icon: 'biPlusSquare', height: '20px',
                                            width: '20px'
                                        })}
                                        </div>

                                        <div class="col-10 text-body fw-bolder">Devenir partenaire</div>
                                    </div>
                                </a>
                                <div class="w-auto">
                            </li>

                            <li class="border-0 bg-transparent "
                                id="btn-menu-responsive"
                                type="button"
                                data-bs-toggle="collapse"
                                data-mdb-toggle="collapse"
                                aria-label="Toggle navigation"
                                data-bs-target="#${this.categoriesCollapse}"
                                aria-expanded="false"
                                aria-controls="${this.categoriesCollapse}">
                                <a href="#">
                                    <div class="row mt-1 pt-1">
                                        <div class="col-1">${this.createElement(IconComponent, {
                                            color: Color.PRIMARY,
                                            icon: 'biChevronCompactRight', height: '20px',
                                            width: '20px'
                                        })}
                                        </div>

                                        <div class="col-8 text-body fw-bolder">Catégories</div>
                                    </div>
                                </a>

                            </li>
                            <div class="container collapse"
                                 id="${this.categoriesCollapse}">
                                <ul>
                                    ${this.categories.map(category => this.renderProductCategory(category))}
                                </ul>
                            </div>


                            <hr>

                            <li><a href="#">
                                <div class="row mt-1 pt-1">
                                    <div class="col-1">${this.createElement(IconComponent, {
                                        color: Color.PRIMARY,
                                        icon: 'suitHeart', height: '20px',
                                        width: '20px'
                                    })}
                                    </div>

                                    <div class="col-10 text-body fw-bolder">Liste de souhaits</div>
                                </div>

                            </a>
                                <div class="w-auto">
                            </li>
                            <hr>


                            <li>
                                <div class=" ">
                                    <div class="row mt-1 pt-1">
                                        <div class="col-2">
                                            <div class="" id="person-icon"
                                                 data-mdb-ripple-color="light">

                                                ${this.createElement(IconComponent, {
                                                    color: Color.PRIMARY,
                                                    icon: 'biPersonFill', height: '55px',
                                                    width: '55px'
                                                })}
                                            </div>
                                        </div>
                                        <div class="col-7 ">

                                            <a href="/mon-compte">
                                                <div class="text-body fw-bolder">Mon compte</div>
                                            </a>
                                            <a href="/mon-compte">
                                                <div class="text-body">Se connecter</div>
                                            </a>
                                            <a href="/mon-compte">
                                                <div class="text-body">S'inscrire</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <hr>
                            <li><a href="#">
                                <div class="text-body">L'association Zartizana</div>
                            </a></li>
                            <li><a href="#">
                                <div class="text-body">Nos artisans</div>
                            </a></li>
                    </div>
                    </ul>
                </div>
            </nav>
        `;
    }

}

