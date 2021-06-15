import {AppComponent} from 'App/core/custom.element';
import {ProductType} from "App/types/product.type";
import {injector} from "App/core/container.service";
import ModalService from "App/core/modal.service";
import {html, property, TemplateResult} from 'lit-element';
import ButtonComponent from "App/modules/shared/components/button.component";
import {Icon} from "App/enum/icon.enum";

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
                ${this.trans("modal.product.added")}
            </div>
            <div class="row">
                <div class="col-6">
                    ${this.createElement(ButtonComponent, {
                        icon: Icon.BI_ARROW_RETURN_LEFT,
                        type: Color.SUCCESS,
                        label: this.trans("modal.product.button.label.return"),
                        $click: () => this.modalService.close()
                    })}
                </div>
            </div>
        `;
    }
}

