import {injector} from "App/modules/shared/services/container.service";
import ConfigurationService from "App/modules/shared/services/configuration.service";
import {AppComponent, createElement} from "App/modules/shared/services/custom.element";
import ModuleService from "App/modules/shared/services/module.service";

export default class RouterService {
    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    @injector(ModuleService)
    private moduleService: ModuleService;

    public rout(): Promise<AppComponent> {
        const wpQuery = this.configurationService.configuration.wpQuery;
        const queriedObject = wpQuery?.queriedObject;

        return new Promise(resolve => {

            switch (true) {
                case wpQuery.isSingular && "postType" in queriedObject ? queriedObject.postType === 'partner' :
                    import('App/modules/partner/partner.modules')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent, {partnerPostId: queriedObject.iD}))
                        });
                    break;
                case wpQuery.isSingular && "postType" in queriedObject ? queriedObject.postType === 'product' :
                    import('App/modules/product/product.modules')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent, {productId: queriedObject.iD}))
                        });
                    break;
                case wpQuery.isSingular && queriedObject.iD === 159:
                    import('App/modules/home/home.modules')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent))
                        });
                    break;
                case wpQuery.isTax:
                    import('App/modules/search/search.modules')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent))
                        });
                    break;
                case wpQuery.isSingular && queriedObject.iD === 91:
                    import('App/modules/partner-request/request.partner.modules')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent))
                        });
                    break;
                default:
                    import('App/modules/page-not-found/page.not.found.module')
                        .then(module => {
                            this.moduleService.addModule(module.default);
                            resolve(createElement(module.default.defaultComponent))
                        });
            }
        });
    }
}