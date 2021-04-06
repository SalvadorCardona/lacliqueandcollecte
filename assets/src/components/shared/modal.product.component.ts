import {AppComponent} from 'App/components/custom.element';
import {ProductType} from "App/types/product.type";
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import {html, property , TemplateResult} from 'lit-element';

export default class ModalProductComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-modal-product';
    }

    @property({type: String})
    private _product: ProductType;

    @injector(ModalService)
    private modalService: ModalService;

    public set product(value: ProductType) {
        this._product = value;
    }

    public render(): TemplateResult {
        return html`
            <img class="rounded img-fluid" alt="${this._product.images[0].alt}" src="${this._product.images[0].src}"/>
            <div class="text-center mt-2">
                Votre Produit a bien été ajouté.
            </div>
            <div class="row">
                <div class="col-6">
                    <app-button @click="${(): void => {
                        document.location.href = "/panier";
                    }}" icon="cart" type="primary" label="Commander mes produits"></app-button>
                </div>
                <div class="col-6">
                    <app-button @click="${(): void => {this.modalService.close()}}" icon="biArrowReturnLeft" type="success" label="Retourner au produit"></app-button>
                </div>
            </div>
        `;
    }
}

