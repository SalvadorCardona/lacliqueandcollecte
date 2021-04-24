import {AppComponent, getComponentSelector} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import {ComponentService} from "App/core/component.service";
import {events, EventService} from "App/core/event.service";
import {property} from "lit-element/lib/decorators";
import DevComponent from "App/modules/dev/components/dev.components";

export default class DevMenuComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-dev-application';
    }

    @injector(ModalService)
    private modalService: ModalService;

    @injector(ComponentService)
    private componentService: ComponentService;

    @injector(EventService)
    private eventService: EventService;

    @property({type: Array})
    private events: Array<events>;

    private openModal(): void {
        const devComponent: DevComponent = document.querySelector(getComponentSelector(DevComponent));
        devComponent.redirect();
    }

    public connectedCallback(): void {
        this.eventService.addSubscriber(events.EVENT_DISPATCHED, () => {
            this.events = this.eventService.eventLoaded;
        })

        this.classList.add(
            'position-fixed',
            'start-0',
            'top-0',
            'min-vh-100',
        );

        super.connectedCallback();
    }

    protected firstUpdated(): void {
        this.toggleShow();
    }

    public render(): TemplateResult {
        return html`
            <div class="app-wrapper">
                <b>Les dev pages</b>
                <li><a @click="${this.openModal} class="dropdown-item" href="/ui/#">Composants</a></li>
                <li><a @click="${this.openModal} class="dropdown-item" href="/ui/#home">Page d'accueil</a></li>
                <li><a @click="${this.openModal} class="dropdown-item" href="/ui/#partner">Partenaire</a></li>
                <li><a @click="${this.openModal} class="dropdown-item" href="/ui/#produit">Produit</a></li>
                <li><a @click="${this.openModal} class="dropdown-item" href="/ui/#search">Search</a></li>
                <b>Les composants</b>
                    ${this.serviceList()}
                <b>Les events</b>
                    ${this.eventList()}
            </div>
            <app-button class="ms-2 position-fixed start-0 bottom-0" @click="${this.toggleShow}" icon="biGearWide" type="success"></app-button>
        `;
    }

    private serviceList(): TemplateResult {
        return html`
            <ul>
                ${this.componentService.components.map(component => {
                    return html`
                        <li>
                            <${getComponentSelector(component)}/>
                        </li>
                    `;
                })}
            </ul>
        `;
    }

    private eventList(): TemplateResult {
        return html`
            <ul>
                ${this.events.map(event => {
                return html`
                        <li>
                            - ${event}
                        </li>
                    `;
                })}
            </ul>
        `;
    }

    private toggleShow(): void {
        const component: HTMLElement = this.querySelector('.app-wrapper');
        component.hidden = !component.hidden;
    }
}
