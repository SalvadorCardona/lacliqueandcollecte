import {AppComponent} from "App/modules/shared/services/custom.element";

export default interface Module {
    services?: Array<Service>;
    components?: Array<Component>;
    defaultComponent?: Component
}

export type Service = new () => any;
export type Component = new <T extends AppComponent>() => T ;


