import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import ClientHttp from "App/shared/client.service";
import {AppHtmlElement, CustomElement} from "App/components/custom.element";

@CustomElement({
    selector: 'app-product-loop',
    template: `
    <div>
        <p>je suis une loupe</p>
    </div>
    `
})
export default class ProductLoopComponent extends AppHtmlElement {

    public idUser: number|null = null;

    static get observedAttributes() { return ['id-user'];}

    connectedCallback() {
        let products;

        ClientHttp.get().getProductsByAuthor(this.idUser)
            .then(response => {
                console.log(response)
            })

        ClientHttp.get().getProducts()
            .then(response => {
                console.log(response)
            })
    }
}