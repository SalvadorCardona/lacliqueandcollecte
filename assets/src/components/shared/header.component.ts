import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {PostType} from "App/types/post.type";
import {keysToCamel} from "App/shared/helper";

@CustomElement()
export default class HeaderComponent extends AppHtmlElement {

    static selector = 'app-header';

    public menus: Array<PostType>|null = null;

    static get observedAttributes() { return ['menus']; }

    connectedCallback() {
        if (typeof this.menus === 'string') {
            this.menus = JSON.parse(this.menus);
        }

        this.menus = keysToCamel(this.menus);
        this.innerHTML = this.render();
    }

    public renderMenu() {
        let menus = '';

        this.menus.forEach(menu => {
            menus += `
                <li id="menus-item-94" class="d-inline-block p-1">
                    <a href="${menu.guid}">${menu.title}</a>
                </li>
            `;
        });

        return menus;
    }

    public render(): string {
        return `
        </div>
        <header class="site-header" role="banner">
            <div class="container site-branding d-flex justify-content-between align-items-center py-2">
                <span class="site-logo">
                    <a href="/" class="custom-logo-link me-3" rel="home">
                        <img src="http://localhost:8000/app/uploads/2020/12/logo.svg" class="custom-logo" alt="La clique &amp; Collecte">
                    </a>            
                    <a href="/" title="Home" rel="home">La Clique &amp; Collecte</a>
                </span>
                <div class="search-bar d-inline-block position-relative">
                    <input type="text" class="form-control" placeholder="Trouver votre produit....">
                    <app-icon icon="search"></app-icon>
                </div>
                <nav class="site-navigation d-flex align-items-center" role="navigation">
            
                    <ul id="menus-main-menus" class="menus m-0">
                        ${this.renderMenu()}
                    </ul>
                
                    <a href="/compte"><app-icon icon="person"></app-icon></a>
                    <a href="/panier"><app-icon icon="cart"></app-icon></a>
                </nav>
            </div>
        </header>
        `;
    }
}

