import {AppComponent} from 'App/core/custom.element';
import {ProductPost} from "App/types/product.type";
import {filterPrice} from "App/core/helper";
import {property} from 'lit-element/lib/decorators';
import {html, TemplateResult} from 'lit-element';
import ButtonComponent from "App/modules/shared/components/button.component";

export default class ProductCardComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-product-card';
    }

    @property({type: Object})
    private product: ProductPost;

    public render(): TemplateResult {
        return html`
            <div class="product
                type-product
                d-flex
                flex-column
                align-items-center
                col">
                <a href="${this.product.guid}">
                    <img alt="product-image" src="${this.product.meta.thumbnail}">
                </a>
                <div class="product-name
                    fs-4
                    text-secondary">${this.product.postTitle}</div>
                <div class="product-price
                    fw-bold
                    mb-3">${filterPrice(this.product.meta.price)}</div>
                ${this.createElement(ButtonComponent, {
                    link: this.product.guid,
                    icon: 'cartPlus',
                    type: 'primary',
                    label: 'Ajouter au panier'
                })}
            </div>
        `;
    }
}

