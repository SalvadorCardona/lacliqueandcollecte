import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {ProductType} from "App/types/product.type";

@CustomElement()
export default class ModalProductComponent extends AppHtmlElement {
    private _product: ProductType;

    set product(value: ProductType) {
        this._product = value;
        this.printRender();
    }

    render(): string {
        return `
            <img class="img-fluid" alt="${this._product.images[0].alt}" src="${this._product.images[0].src}"/>
            <div class="row">
                <div class="col-6">
                    <app-button type="primary" label="Aller au panier"></app-button>
                </div>
                <div class="col-6">
                    <app-button type="success" label="Retourner au produit"></app-button>
                </div>
            </div>
        `;
    }
}

