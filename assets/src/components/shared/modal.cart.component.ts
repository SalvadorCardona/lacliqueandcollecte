import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {OnInit, ServiceContainer} from "App/core/service.container";
import {ModalService} from "App/core/modal.service";
import {CartType} from "App/types/cart.type";

@CustomElement()
export default class ModalCartComponent extends AppHtmlElement implements OnInit {
    private _cart: CartType;
    private modalService: ModalService;

    afterRender() {

    }

    onInit(serviceContainer: ServiceContainer): void {
        this.modalService = serviceContainer.service(ModalService);
    }

    render(): string {
        return `
            
        `;
    }
}

