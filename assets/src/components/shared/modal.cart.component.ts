import {AppComponent} from 'App/components/custom.element';
import {ServiceContainer} from "App/core/service.container";
import {ModalService} from "App/core/modal.service";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import { html, property } from 'lit-element';

export default class ModalCartComponent extends AppComponent {
    @property({type: String})
    private _cart: CartType;
    private modalService: ModalService;
    private cartService: CartService;

    protected onInit(serviceContainer: ServiceContainer): void {
        this.cartService = serviceContainer.service(CartService);
        this.modalService = serviceContainer.service(ModalService);
    }

    public render() {
        return html`
            ${this._cart.totals}
        `;
    }
}

