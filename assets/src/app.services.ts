import ClientService from "App/core/client.service";
import {ComponentService} from "App/core/component.service";
import {EventService} from "App/core/event.service";
import CartService from "App/core/cart.service";

const services = [
    EventService,
    ClientService,
    CartService,
    ComponentService,
];

export default services;