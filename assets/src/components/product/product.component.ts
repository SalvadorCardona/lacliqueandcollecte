import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {Product} from "App/models/product";

@CustomElement()
export default class ProductComponent extends AppHtmlElement {

    static selector = 'app-product';

    static get observedAttributes() { return ['product'];}

    public product: Product;

    connectedCallback() {
        this.classList.add('col-4')
        this.innerHTML = this.render();
        this.querySelector('button').addEventListener('click', _ => alert(''));
    }

    render() {
        return `
            <div class="product">
                <a href="${this.product.permalink}">
                    <img src="${this.product.images[0].src}">
                </a>
                <span clas="product-name">${this.product.name}</span>
                <span clas="product-price">${this.product.price}</span>
                <button class="btn btn-app">Add To Basket</button>
            </div>
        `;
    }
}

