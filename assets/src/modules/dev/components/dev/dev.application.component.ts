import {AppComponent, getComponentSelector} from "App/components/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import {ComponentService} from "App/core/component.service";
import {events, EventService} from "App/core/event.service";
import {property} from "lit-element/lib/decorators";
import './style.css';

export default class DevApplicationComponent extends AppComponent {
    @injector(ModalService)
    private modalService: ModalService;

    @injector(ComponentService)
    private componentService: ComponentService;

    @injector(EventService)
    private eventService: EventService;

    @property({type: Array})
    private events: Array<events>;

    private openModal(): void {
        return;
    }

    public connectedCallback(): void {
        this.eventService.addSubscriber(events.EVENT_DISPATCHED, payload => {
            this.events = this.eventService.eventLoaded;
        })
        super.connectedCallback();
    }

    public render(): TemplateResult {
        return html`
            <style>
            </style>
            <app-wrapper>
                <h2>Les dev pages</h2>
                <li><a class="dropdown-item" href="#">Composants</a></li>
                <li><a class="dropdown-item" href="#partner">Partenaire</a></li>
                <li><a class="dropdown-item" href="#produit">Produit</a></li>
                <h2>Les composants</h2>
                ${this.serviceList()}
                <h2>Les events</h2>
                ${this.eventList()}
            </app-wrapper>
            <app-button @click="${this.openModal}" icon="person" type="success"></app-button>
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
}
