import ClientHttp from "App/core/client.service";
import {AppHtmlElement, CustomElement, Prop} from "App/components/custom.element";
import {Product} from "App/models/product"
import ProductComponent from "App/components/product/product.component";

@CustomElement()
export default class ProductLoopComponent extends AppHtmlElement {

    static selector = 'app-product-loop';
    public idUser: number|null = null;
    public products: Array<Product>

    static get observedAttributes() { return ['id-user'];}

    connectedCallback() {
        ClientHttp.get().product.getProducts({author: this.idUser})
            .then(response => {
                let wrapper = document.createElement('div');
                wrapper.classList.add(...['d-flex', 'product-loop']);
                this.products = response.data as Array<Product>;
                this.products.forEach(product => {

                    let productComponent = document.createElement('app-product') as ProductComponent;
                    productComponent.product = product;


                    wrapper.appendChild(productComponent);
                })

                this.appendChild(wrapper);
            })
    }
}