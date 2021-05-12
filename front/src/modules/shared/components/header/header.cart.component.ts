import {AppComponent, createElement} from "App/core/custom.element";
import {CartType} from "App/types/cart.type";
import CartService from "App/core/cart.service";
import EventService, {events} from "App/core/event.service";
import {injector} from "App/core/container.service";
import {html, property, TemplateResult} from "lit-element";
import ModalService from "App/core/modal.service";
import ModalCartComponent from "App/modules/shared/components/modal.cart.component";
import IconComponent from "App/modules/shared/components/icon.component";

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
        this.eventService.addSubscriber(events.CART_HAS_CHANGED, () => this.cartUpdated());
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
            <span @click=${this.openModal}>
                ${this.createElement(IconComponent, {icon: 'cart'})}
                <div class="counter
                    text-white
                    bg-primary
                    position-absolute
                    text-center
                    end-0
                    ">
                    ${this.cart ? this.cart.itemsCount : null}
                </div>
            </span>
        `;
    }
}