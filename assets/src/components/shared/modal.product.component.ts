import {AppHtmlElement} from 'App/components/custom.element';
import {ProductType} from "App/types/product.type";
import {OnInit, ServiceContainer} from "App/core/service.container";
import {ModalService} from "App/core/modal.service";

export default class ModalProductComponent extends AppHtmlElement implements OnInit {
    private _product: ProductType;
    private modalService: ModalService;
    set product(value: ProductType) {
        this._product = value;
        this.printRender();
    }

    afterRender() {
        this.addEvent('[data-role="redirect"]', 'click', () => {
            document.location.href="/panier";
        });

        this.addEvent('[data-role="close-modal"]', 'click', () => {
            this.modalService.close();
        });
    }

    onInit(serviceContainer: ServiceContainer): void {
        this.modalService = serviceContainer.service(ModalService);
    }

    render(): string {
        return `
            <img class="rounded img-fluid" alt="${this._product.images[0].alt}" src="${this._product.images[0].src}"/>
            <div class="text-center mt-2">
                Votre Produit a bien été ajouté.
            </div>
            <div class="row">
                <div data-role="redirect" class="col-6">
                    <app-button icon="cart" type="primary" label="Commander mes produits"></app-button>
                </div>
                <div class="col-6">
                    <app-button data-role="close-modal" icon="biArrowReturnLeft" type="success" label="Retourner au produit"></app-button>
                </div>
            </div>
        `;
    }
}

