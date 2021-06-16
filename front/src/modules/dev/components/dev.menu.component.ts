import {AppComponent, getComponentSelector} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/modules/shared/services/container.service";
import ModalService from "App/modules/shared/services/modal.service";
import EventService from "App/modules/shared/services/event.service";

import DevComponent from "App/modules/dev/components/dev.components";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";
import {Icon} from "App/enum/icon.enum";

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
                <b>${this.trans("dev.menu.title")}</b>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#">${this.trans("dev.menu.components")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#home">${this.trans("dev.menu.home.page")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#partner">${this.trans("dev.menu.partners")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#produit">${this.trans("dev.menu.products")}</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#search">${this.trans("dev.menu.search")}</a></li>
            </div>
            ${this.createElement(ButtonComponent, {
                classList: 'ms-2 mb-2 position-fixed start-0 bottom-0',
                icon: Icon.BI_GEAR_WIDE,
                type: Color.SUCCESS,
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
