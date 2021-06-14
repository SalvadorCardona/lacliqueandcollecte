import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";

export default class TranslateService {
    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    public translate(key: string): string {
        const translation = this.configurationService.configuration.translation;
        // eslint-disable-next-line no-prototype-builtins
        if (translation.hasOwnProperty(key)) {

            return translation[key];
        }

        return key;
    }
}
