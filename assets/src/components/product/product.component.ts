import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {Image, ProductType} from "App/types/product.type";
import {filterPrice} from "App/shared/helper";

@CustomElement()
export default class ProductComponent extends AppHtmlElement {

    static get observedAttributes() { return ['product'];}

    public product: ProductType;

    connectedCallback() {
        this.classList.add(...['col-md-4', 'pt-0'])
        this.innerHTML = this.render();
        this.querySelector('button').addEventListener('click', _ => alert(''));
    }

    render() {
        return `
            <div class="product type-product d-flex flex-column align-items-center ">
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

    getAttributeImage(images: Image[]): string {
        if (!images.length) return '';

        let [image] = images;

        return image.alt || image.src;
    }


    getThumbnail(images: Array<Image>): string {
        if (!images.length) return '';

        let imageSrc = images[0].src;

        return `${imageSrc.substring(0, imageSrc.length - 4)}-300x300.jpg`;
    }
}

