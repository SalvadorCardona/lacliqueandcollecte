import {AppComponent, getComponentSelector} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ModalService from "App/core/modal.service";
import EventService from "App/core/event.service";

import DevComponent from "App/modules/dev/components/dev.components";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";

export default class DevMenuComponent extends AppComponent {

    @injector(ModalService)
    private modalService: ModalService;

    @injector(EventService)
    private eventService: EventService;

    public static getComponentName(): string {
        return 'app-dev-application';
    }

    public render(): TemplateResult {
        return html`
            <div class="app-wrapper">
                <b>${this.trans("devMenuTitle")}</b>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#">${this.trans("devMenuComponents")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#home">${this.trans("devMenuHomepage")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#partner">${this.trans("devMenuPartners")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#produit">${this.trans("devMenuProducts")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#search">${this.trans("devMenuSearch")}</a></li>
            </div>
            ${this.createElement(ButtonComponent, {
                classList: this.trans("devMenuComponentButtonClassList"),
                icon: this.trans("devMenuComponentButtonIcon"),
                
                type:Color.SUCCESS,
                $click: () => this.toggleShow()
            })};
        `;
    }

    protected firstUpdated(): void {
        this.toggleShow();
    }

    private openModal(): void {
        const devComponent: DevComponent = document.querySelector(getComponentSelector(DevComponent));
        devComponent.redirect();
    }

    private toggleShow(): void {
        const component: HTMLElement = this.querySelector('.app-wrapper');
        component.hidden = !component.hidden;
    }
}
