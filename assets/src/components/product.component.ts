import {CustomElement} from 'App/components/custom.element';

@CustomElement({
    selector: 'app-product',
    template: `
    <div>
        <p>je suis un produit</p>
    </div>
    `
})
export default class ProductComponent extends HTMLElement {

    static get observedAttributes() { return ['icon', 'domain']; }

    attributeChangedCallback (name: string, oldValue: any, newValue: any) {

    }

    connectedCallback() {
        // this.innerHTML = iconResult ? icon(iconResult).html[0] : 'not find';
    }
}

