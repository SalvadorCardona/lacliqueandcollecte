import ClientService from "App/core/client.service";
import {ComponentService} from "App/core/component.service";
import {EventService} from "App/core/event.service";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";
import {ModalService} from "App/core/modal.service";

const services = [
    ModalService,
    EventService,
    LoaderService,
    ClientService,
    CartService,
    ComponentService
];

export default services;