import {AppComponent} from 'App/components/custom.element';
import {Image, ProductType} from "App/types/product.type";
import {filterPrice} from "App/shared/helper";
import { property } from 'lit-element/lib/decorators';
import { html , TemplateResult } from 'lit-element';

export default class ProductComponent extends AppComponent {

    @property({type: Object})
    private product: ProductType;

    public render(): TemplateResult {
        return html`
            <div class="product type-product d-flex flex-column align-items-center col">
                <a href="${this.product.permalink}">
                    <img alt="${this.getAttributeImage(this.product.images)}" src="${this.getThumbnail(this.product.images)}">
                </a>
                <div class="product-name fs-4 text-secondary">${this.product.name}</div>
                <div class="product-price fw-bold">${filterPrice(this.product.price)}</div>
                <div class="">
                    <app-button icon="cartPlus" type="primary" label="Ajouter au panier"></app-button>
                </div>
            </div>
        `;
    }

    private getAttributeImage(images: Image[]): string {
        if (!images.length) return '';

        const [image] = images;

        return image.alt || image.src;
    }


    private getThumbnail(images: Array<Image>): string {
        if (!images.length) return '';

        const imageSrc = images[0].src;

        return `${imageSrc.substring(0, imageSrc.length - 4)}-300x300.jpg`;
    }
}

