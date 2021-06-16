import {injector} from "App/modules/shared/services/container.service";
import EventService from "App/modules/shared/services/event.service";
import ModalComponent from "App/modules/shared/components/modal.component";
import {createElement} from "App/modules/shared/services/custom.element";

export default class ModalService {
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