import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {Image, Product} from "App/models/product";

@CustomElement()
export default class ProductComponent extends AppHtmlElement {

    static selector = 'app-product';

    static get observedAttributes() { return ['product'];}

    public product: Product;

    connectedCallback() {
        this.classList.add(...['col-md-4', 'pt-0'])
        this.innerHTML = this.render();
        this.querySelector('button').addEventListener('click', _ => alert(''));
    }

    render() {
        return `
            <div class="product type-product d-flex flex-column align-items-center ">
                <a href="${this.product.permalink}">
                    <img src="${this.getThumbnail(this.product.images)}">
                </a>
                <div class="product-name fs-4 text-secondary">${this.product.name}</div>
                <div class="product-price fw-bold">${this.product.price} €</div>
                <div class="">
                    <app-button icon="shopping-basket" type="primary" label="Ajouter au panier"></app-button>
                </div>
            </div>
        `;
    }

    getThumbnail(images: Array<Image>): string {
        if (!images.length) return '';

        let imageSrc = images[0].src;

        return `${imageSrc.substring(0, imageSrc.length - 4)}-300x300.jpg`;
    }
}

