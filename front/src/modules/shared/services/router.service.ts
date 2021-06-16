import {injector} from "App/modules/shared/services/container.service";
import ConfigurationService from "App/modules/shared/services/configuration.service";
import ProductModule from "App/modules/product/product.modules";
import PageNotFoundModule from "App/modules/page-not-found/page.not.found.module";
import {AppComponent, createElement} from "App/modules/shared/services/custom.element";
import PartnerModule from "App/modules/partner/partner.modules";
import HomeModule from "App/modules/home/home.modules";
import SearchModule from "App/modules/search/search.modules";
import RequestPartnerModule from "App/modules/partner-request/request.partner.modules";

import('App/modules/product/product.modules')
    .then((module) => {
        console.log(module)
    });

export default class RouterService {
    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    public rout(): AppComponent
    {
        const wpQuery = this.configurationService.configuration.wpQuery;
        const queriedObject = wpQuery?.queriedObject;

        switch (true) {
            case wpQuery.isSingular && queriedObject.postType === 'partner':
                return createElement(PartnerModule.defaultComponent, {partnerPostId: queriedObject.iD});
                break;
            case wpQuery.isSingular && queriedObject.postType === 'product':
                return createElement(ProductModule.defaultComponent, {productId: queriedObject.iD});
                break;
            case wpQuery.isSingular && queriedObject.iD === 159:
                return createElement(HomeModule.defaultComponent);
                break;
            case wpQuery.isTax:
                return createElement(SearchModule.defaultComponent);
                break;
            case wpQuery.isSingular && queriedObject.iD === 91:
                return createElement(RequestPartnerModule.defaultComponent);
                break;
            default:
                return createElement(PageNotFoundModule.defaultComponent);
    }
}