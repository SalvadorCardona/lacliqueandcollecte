import {AppComponent, createElement} from "App/components/custom.element";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import {events, EventService} from "App/core/event.service";
import {injector} from "App/core/container.service";
import {html, property , TemplateResult} from "lit-element";
import {ModalService} from "App/core/modal.service";
import ModalCartComponent from "App/components/shared/modal.cart.component";

export default class HeaderCartComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-header-cart';
    }

    @property({type: Object})
    private cart: CartType|null = null;

    @injector(CartService)
    private cartService: CartService;

    @injector(EventService)
    private eventService: EventService;

    @injector(ModalService)
    private modalService: ModalService;

    public firstUpdated(): void {
        this.classList.add('position-relative');
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, () => this.cartUpdated())
    }

    private openModal(): void {
        const modalCartComponent: ModalCartComponent = createElement(ModalCartComponent);

        this.modalService.open(modalCartComponent, 'Votre Panier');
    }

     private cartUpdated(): void {
        this.cart = this.cartService.cart;
    }

    public render(): TemplateResult {
        return html`
            <button class="action" @click="${this.openModal}"><app-icon icon="cart"></app-icon></button>
        `;
    }
}