import {AppComponent} from 'App/core/custom.element';
import {property} from "lit-element/lib/decorators";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";
import IconComponent from "App/modules/shared/components/icon.component";
import {Collapse} from 'bootstrap';
import {Category} from "App/types/product.type";
import {Color} from "App/enum/color.enum";


export default class HeaderMobileComponent extends AppComponent {
    private selector: string = 'menu-mobile';

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
        console.log(this.categories = this.configurationService.configuration.productsCategories);
    }


    private renderProductCategory(category: Category): TemplateResult {
        return html`
            ${category.name}
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
                        data-bs-target="#menu-collapse" 
                        aria-expanded="false" 
                        aria-controls="menu-collapse">
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
                                text-primary " href="/" title="Home"
                               rel="home"><div class="text-right">${this.trans("headerComponentZartizana")}</div></a>
                        </span>


                    <div class="container collapse navbar-collapse" id="menu-collapse">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active"><a href="/devenir-partenaire">
                                <div class="row">
                                    <div class="col-1">${this.createElement(IconComponent, {
                                        color: Color.INFO,
                                        icon: this.trans("headerComponentSearchIcon")
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
                                    <div class="row">
                                        <div class="col-1">${this.createElement(IconComponent, {
                                            classList: 'primary',
                                            icon: 'biPlusSquare'
                                        })}
                                        </div>

                                        <div class="col-10 text-body fw-bolder">Devenir partenaire</div>
                                    </div>
                                </a>
                                <div class="w-auto">
                            </li>

                            <!--                        TODO: implements product's categories-->
                            <li class="border-0 bg-transparent " id="btn-menu-responsive" type="button"
                                data-bs-toggle="collapse" data-mdb-toggle="collapse" aria-label="Toggle navigation"
                                data-bs-target="#categories-collapse" aria-expanded="false"
                                aria-controls="categories-collapse"><a href="#">
                                <div class="row">
                                    <div class="col-1">${this.createElement(IconComponent, {
                                        classList: 'primary',
                                        icon: 'biChevronCompactRight'
                                    })}
                                    </div>

                                    <div class="col-8 text-body fw-bolder">Catégories</div>
                                </div>
                            </a>

                            </li>
                            <div class="container collapse" id="categories-collapse">
                                <ul>
                                    ${this.categories.map(category => this.renderProductCategory(category))}
                                </ul>
                            </div>


                            <hr>

                            <li><a href="#">
                                <div class="row">
                                    <div class="col-1">${this.createElement(IconComponent, {
                                        classList: 'primary',
                                        icon: 'suitHeart'
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
                                    <div class="row ">
                                        <div class="col-1">
                                            <div class="" id="person-icon"
                                                 data-mdb-ripple-color="light">

                                                ${this.createElement(IconComponent, {
                                                    classList: 'primary',
                                                    icon: 'person'
                                                })}
                                            </div>
                                        </div>
                                        <div class="col-6">

                                            <a href="/moncompte">
                                                <div class="text-body fw-bolder">Mon compte</div>
                                            </a>
                                            <a href="/moncompte">
                                                <div class="text-body">Se connecter</div>
                                            </a>
                                            <a href="/moncompte">
                                                <div class="text-body">S'inscrire</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <hr>
                            <li><a href="/moncompte">
                                <div class="text-body">L'association Zartizana</div>
                            </a></li>
                            <li><a href="/moncompte">
                                <div class="text-body">Nos artisans</div>
                            </a></li>
                    </div>
                    </ul>
                </div>
            </nav>
        `;
    }

}

