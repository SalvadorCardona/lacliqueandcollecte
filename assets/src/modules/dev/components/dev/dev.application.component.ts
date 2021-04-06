import {AppComponent, getComponentSelector} from "App/components/custom.element";
import {html, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";
import {ComponentService} from "App/core/component.service";
import {events, EventService} from "App/core/event.service";
import {property} from "lit-element/lib/decorators";
import DevComponent from "App/modules/dev/components/dev/dev.components";

export default class DevApplicationComponent extends AppComponent {

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
        console.log('lat');
        const a: DevComponent = document.querySelector(getComponentSelector(DevComponent));
        console.log(a);
        a.redirect();
    }

    public connectedCallback(): void {
        this.eventService.addSubscriber(events.EVENT_DISPATCHED, payload => {
            this.events = this.eventService.eventLoaded;
        })

        this.classList.add(
           'position-fixed',
            'start-0',
            'top-0',
            'min-vh-100',
            'overflow-scroll'
        );

        super.connectedCallback();
    }

    public render(): TemplateResult {
        return html`
            <app-wrapper class="h-100" @click="${this.openModal}">
                <b>Les dev pages</b>
                <li><a class="dropdown-item" href="/ui/#">Composants</a></li>
                <li><a class="dropdown-item" href="/ui/#partner">Partenaire</a></li>
                <li><a class="dropdown-item" href="/ui/#produit">Produit</a></li>
                <b>Les composants</b>
                    ${this.serviceList()}
                <b>Les events</b>
                    ${this.eventList()}
                <app-button  icon="person" type="success"></app-button>
            </app-wrapper>
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
