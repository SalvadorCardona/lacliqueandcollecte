import {AppComponent, createElement} from "App/components/custom.element";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {events, EventService} from "App/core/event.service";
import {ContainerService} from "App/core/container.service";
import { html, property } from "lit-element";
import {ModalService} from "App/core/modal.service";
import ModalCartComponent from "App/components/shared/modal.cart.component";

export default class HeaderCartComponent extends AppComponent {
    @property({type: Object})
    private cart: CartType|null = null;
    private cartService: CartService;
    private eventService: EventService;
    private modalService: ModalService;

    protected onInit(containerService: ContainerService) {
        this.classList.add('position-relative')
        this.modalService = containerService.service(ModalService);
        this.cartService = containerService.service(CartService);
        this.eventService = containerService.service(EventService);
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, _ => this.cartUpdated())
    }
    private openModal() {
        let modalCartComponent: ModalCartComponent = createElement(ModalCartComponent);

        this.modalService.open(modalCartComponent, 'Votre Panier');
    }

    private cartUpdated() {
        this.cart = this.cartService.cart;
    }

    public render() {
        return html`
            <button class="action" @click="${this.openModal}"><app-icon icon="cart"></app-icon></button>
        `;
    }
}