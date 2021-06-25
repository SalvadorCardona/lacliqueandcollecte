import {injector} from "App/modules/shared/services/container.service";
import ConfigurationService from "App/modules/shared/services/configuration.service";

export default class TranslateService {
    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    public translate(key: string): string {
        const translation = this.configurationService.configuration.translation;
        if (key in translation) {

            return translation[key];
        }

        return key;
    }
}
