import {AppComponent} from 'App/modules/shared/services/custom.element';
import {ProductPost} from "App/modules/shared/types/product.type";
import {filterPrice} from "App/modules/shared/services/helper";
import {property} from 'lit-element/lib/decorators';
import {html, TemplateResult} from 'lit-element';
import ButtonComponent from "App/modules/shared/components/button.component";
import {Icon} from "App/modules/shared/enum/icon.enum";
import {Color} from "App/modules/shared/enum/color.enum";

export default class ProductCardComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-product-card';
    }

    @property({type: Object})
    private product: ProductPost;

    public render(): TemplateResult {
        return html`
            <div class="zoomable
                app-wrapper
                d-flex
                flex-column
                align-items-center
                col">
                <a href="${this.product.guid}">
                    <img alt="product-image" src="${this.product.meta.thumbnail}">
                </a>
                <div class="product-name
                    fs-5 text
                    text-secondary">${this.product.postTitle}</div>
                <div class="product-price
                    fw-bold
                    mb-3">${filterPrice(this.product.meta.price)}</div>
                ${this.createElement(ButtonComponent, {
                    link: this.product.guid,
                    icon: Icon.CART_PLUS,
                    type: Color.PRIMARY,
                    label: this.trans("product.card.component.button.label")
                })}
            </div>
        `;
    }
}

