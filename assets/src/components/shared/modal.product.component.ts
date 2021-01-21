import {AppComponent} from 'App/components/custom.element';
import {ProductType} from "App/types/product.type";
import { ContainerService} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import { html, property , TemplateResult } from 'lit-element';

export default class ModalProductComponent extends AppComponent {
    @property({type: String})
    private _product: ProductType;

    private modalService: ModalService;

    set product(value: ProductType) {
        this._product = value;
    }

    protected onInit(containerService: ContainerService): void {
        this.modalService = containerService.service(ModalService);
    }

    public render(): TemplateResult {
        return html`
            <img class="rounded img-fluid" alt="${this._product.images[0].alt}" src="${this._product.images[0].src}"/>
            <div class="text-center mt-2">
                Votre Produit a bien été ajouté.
            </div>
            <div class="row">
                <div class="col-6">
                    <app-button @click="${() => document.location.href="/panier"}" icon="cart" type="primary" label="Commander mes produits"></app-button>
                </div>
                <div class="col-6">
                    <app-button @click="${this.modalService.close}" icon="biArrowReturnLeft" type="success" label="Retourner au produit"></app-button>
                </div>
            </div>
        `;
    }
}
