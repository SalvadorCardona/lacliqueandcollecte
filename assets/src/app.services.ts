import ClientService from "App/core/client.service";
import {ComponentService} from "App/core/component.service";
import {EventService} from "App/core/event.service";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";

const services = [
    EventService,
    ClientService,
    CartService,
    ComponentService,
    LoaderService
];

export default services;