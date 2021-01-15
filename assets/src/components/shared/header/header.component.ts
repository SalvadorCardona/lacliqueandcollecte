import {AppHtmlElement} from 'App/components/custom.element';
import {PostType} from "App/types/post.type";
import {keysToCamel} from "App/shared/helper";

export default class HeaderComponent extends AppHtmlElement {

    private menus: Array<PostType>|null = null;

    static get observedAttributes() { return ['menus']; }

    onInit() {
        if (typeof this.menus === 'string') {
            this.menus = JSON.parse(this.menus);
        }

        this.menus = keysToCamel(this.menus);
    }


    private renderMenu(): string {
        return this.menus.map(menu => {
            return `
                <li id="menus-item-94" class="d-inline-block p-1">
                    <a href="${menu.guid}">${menu.title}</a>
                </li>
            `;
        }).join('|');
    }

    public render(): string {
        return `
        <header class="site-header gradient-primary" role="banner">
            <div class="container site-branding d-flex justify-content-between align-items-center py-2">
                <span class="site-logo">
                    <a href="/" class="custom-logo-link me-3" rel="home">
                        <img src="http://localhost:8000/app/uploads/2020/12/logo.svg" class="custom-logo" alt="La clique &amp; Collecte">
                    </a>            
                    <a class="site-logo-title" href="/" title="Home" rel="home">La Clique &amp; Collecte</a>
                </span>
                <div class="search-bar d-inline-block position-relative">
                    <input type="text" class="form-control" placeholder="Trouver votre produit....">
                    <app-icon icon="search"></app-icon>
                </div>
                <nav class="site-navigation d-flex align-items-center" role="navigation">
            
                    <ul id="menus-main-menus" class="menus m-0">
                        ${this.renderMenu()}
                    </ul>
                
                    <a href="/mon-compte"><app-icon icon="person"></app-icon></a>
                    
                    <app-header-cart></app-header-cart>
                </nav>
            </div>
        </header>
        `;
    }
}

