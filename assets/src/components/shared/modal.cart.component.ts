import {AppHtmlElement} from 'App/components/custom.element';
import {OnInit, ServiceContainer} from "App/core/service.container";
import {ModalService} from "App/core/modal.service";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";

export default class ModalCartComponent extends AppHtmlElement implements OnInit {
    private _cart: CartType;
    private modalService: ModalService;
    private cartService: CartService;

    afterRender() {

    }

    onInit(serviceContainer: ServiceContainer): void {
        this._cart;
        this.modalService = serviceContainer.service(ModalService);
    }

    render(): string {
        return `
            
        `;
    }
}

