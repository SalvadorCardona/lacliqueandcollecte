import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {Product} from "App/models/product";

@CustomElement()
export default class ProductComponent extends AppHtmlElement {

    static selector = 'app-product';

    static get observedAttributes() { return ['product'];}

    public product: Product;

    connectedCallback() {
        this.innerHTML = this.render();
        this.querySelector('button').addEventListener('click', _ => alert(''));
    }

    render() {
        return `
            <div>
                ${this.product.price}
                <button>Add To Basket</button>
            </div>
        `;
    }
}

