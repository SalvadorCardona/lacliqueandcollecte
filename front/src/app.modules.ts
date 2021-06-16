import Module from "App/types/module.type";
import SharedModule from "App/modules/shared/shared.modules";
import ProductModule from "App/modules/product/product.modules";
import PartnerModule from "App/modules/partner/partner.modules";
import HomeModule from "App/modules/home/home.modules";
import SearchModule from "App/modules/search/search.modules";
import PageNotFoundModule from "App/modules/page-not-found/page.not.found.module";
import RequestPartnerModule from "App/modules/partner-request/request.partner.modules";
import DevModule from "App/modules/dev/dev.modules";

export default [
    SharedModule,
    ProductModule,
    PartnerModule,
    HomeModule,
    DevModule,
    SearchModule,
    PageNotFoundModule,
    RequestPartnerModule
] as Module[];