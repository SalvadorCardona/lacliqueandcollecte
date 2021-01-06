import ClientService from "App/core/client.service";
import {AppHtmlElement, CustomElement, Prop} from "App/components/custom.element";
import {ProductType} from "App/types/product.type"
import ProductComponent from "App/components/product/product.component";

@CustomElement()
export default class ProductLoopComponent extends AppHtmlElement {

    static selector = 'app-product-loop';
    public idUser: number|null = null;
    public products: Array<ProductType>

    static get observedAttributes() { return ['id-user'];}

    connectedCallback() {
        ClientService.get().product.getProducts({author: this.idUser})
            .then(products => {
                let wrapper = document.createElement('div');
                wrapper.classList.add(...['row', 'product-loop']);
                this.products = products;
                this.products.forEach(product => {

                    let productComponent = document.createElement('app-product') as ProductComponent;
                    productComponent.product = product;

                    wrapper.appendChild(productComponent);
                })

                this.appendChild(wrapper);
            })
    }

    public render(): string
    {
        return `
            <div class="d-flex product-loop">
            
            </div>
        `;
    }
}