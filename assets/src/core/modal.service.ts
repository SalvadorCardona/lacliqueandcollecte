import {injector} from "App/core/container.service";
import {EventService} from "App/core/event.service";
import ModalComponent from "App/components/shared/modal.component";
import {createElement} from "App/components/custom.element";

export class ModalService {
    private modalComponent: ModalComponent;

    @injector(EventService)
    private eventService: EventService;

    public static idModalComponent = 'modal-component-id';

    public open(content: HTMLElement, title: string = null): void
    {
        this.modalComponent = createElement(ModalComponent);
        this.modalComponent.id = ModalService.idModalComponent;
        this.modalComponent.init(content, title);
        this.modalComponent.$close = (): void => this.close();

        document.body.append(this.modalComponent);
    }

    public close(): void
    {
        this.modalComponent.remove();
    }
}