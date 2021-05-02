import Module from "App/types/module.type";
import ModalService from "App/core/modal.service";
import EventService from "App/core/event.service";
import LoaderService from "App/core/loader.service";
import ClientService from "App/core/client.service";
import CartService from "App/core/cart.service";
import ComponentService from "App/core/component.service";
import CartClient from "App/core/client/cart.client";
import ProductClient from "App/core/client/product.client";
import ConfigurationService from "App/core/configuration.service";
import ApplicationClient from "App/core/client/application.client";
import PartnerClient from "App/core/client/partner.client";
import sharedModule from "App/modules/shared/shared.modules";
import productModule from "App/modules/product/product.modules";
import partnerModule from "App/modules/partner/partner.modules";
import devModule from "App/modules/dev/dev.modules";
import homeModule from "App/modules/home/home.modules";
import searchModule from "App/modules/search/search.modules";
import SearchClient from "App/core/client/search.client";
import SearchService from "App/core/search.service";

export default [
    homeModule,
    sharedModule,
    productModule,
    partnerModule,
    devModule,
    searchModule,
    {
        services: [
            ModalService,
            EventService,
            LoaderService,
            ClientService,
            CartService,
            ComponentService,
            CartClient,
            ProductClient,
            ConfigurationService,
            ApplicationClient,
            PartnerClient,
            SearchClient,
            SearchService
        ],
    }
] as Module[];