import {ContainerService, OnInit} from "App/core/container.service";
import {events, EventService} from "App/core/event.service";
import ModalComponent from "App/components/shared/modal.component";
import {createElement} from "App/components/custom.element";

export class ModalService implements OnInit {
    private modalComponent: ModalComponent;
    public static idModalComponent: string = 'modal-component-id';

    onInit(containerService: ContainerService): void {
        let eventService: EventService = containerService.service(EventService);
        eventService.addSubscriber(events.SERVICE_MOUNTED, () => this.setup());
    }

    private setup() {

    }

    public open(content: HTMLElement, title: string = null): void
    {
        this.modalComponent = createElement(ModalComponent);
        this.modalComponent.id = ModalService.idModalComponent;
        this.modalComponent.init(content, title);
        this.modalComponent.$close = () => this.close();

        document.body.append(this.modalComponent);
    }

    public close(): void
    {
        this.modalComponent.remove();
    }
}