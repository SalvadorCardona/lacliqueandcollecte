import {AppComponent, getComponentSelector} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import ModalService from "App/core/modal.service";
import EventService from "App/core/event.service";

import DevComponent from "App/modules/dev/components/dev.components";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/core/color.enum";

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
                <b>Les dev pages</b>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#">Composants</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#home">Page d'accueil</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#partner">Partenaire</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#produit">Produit</a></li>
                <li><a @click=${this.openModal} class="dropdown-item" href="/ui/#search">Search</a></li>
            </div>
            ${this.createElement(ButtonComponent, {
                classList: 'ms-2 mb-2 position-fixed start-0 bottom-0',
                icon: 'biGearWide',
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
