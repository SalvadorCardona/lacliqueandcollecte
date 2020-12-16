import {AppHtmlElement, CustomElement} from 'App/components/custom.element';

@CustomElement({
    selector: 'app-product',
    template: `
    <div>
        <p>je suis un produit</p>
    </div>
    `
})
export default class ProductComponent extends AppHtmlElement {

    static get observedAttributes() { return ['icon', 'domain'];}

    connectedCallback() {
        // this.innerHTML = iconResult ? icon(iconResult).html[0] : 'not find';
    }
}

