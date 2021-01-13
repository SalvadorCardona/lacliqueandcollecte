import {ServiceContainer, OnInit} from "App/core/service.container";
import {events, EventService} from "App/core/event.service";
import ModalComponent from "App/components/shared/modal.component";
import {createElement} from "App/components/custom.element";

export class ModalService implements OnInit {
    private modalComponent: ModalComponent;
    public static idModalComponent: string = 'modal-component-id';

    onInit(serviceContainer: ServiceContainer): void {
        let eventService: EventService = serviceContainer.service(EventService);
        eventService.addSubscriber(events.SERVICE_READY, () => this.setup());
    }

    private setup() {

    }

    public open(content: HTMLElement): void
    {
        console.log('2', content)
        this.modalComponent = createElement(ModalComponent);
        this.modalComponent.id = ModalService.idModalComponent;
        this.modalComponent.body = content;
        this.modalComponent.$close = () => this.close();

        document.body.insertAdjacentElement('beforeend', this.modalComponent);
    }

    public close(): void
    {
        this.modalComponent.remove();
    }
}