import ClientService from "App/core/client.service";
import {ComponentService} from "App/core/component.service";
import {EventService} from "App/core/event.service";
import CartService from "App/core/cart.service";
import {LoaderService} from "App/core/loader.service";
import {ModalService} from "App/core/modal.service";
import CartClient from "App/core/client/cart.client";
import ProductClient from "App/core/client/product.client";

const services = [
    ModalService,
    EventService,
    LoaderService,
    ClientService,
    CartService,
    ComponentService,
    CartClient,
    ProductClient,
];

export default services;