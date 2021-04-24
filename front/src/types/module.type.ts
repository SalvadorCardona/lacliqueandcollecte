import {AppComponent} from "App/core/custom.element";

export interface Module {
    services?: Array<Service>;
    components?: Array<Component>;
}

export type Service = new () => any;
export type Component = new <T extends AppComponent>() => T ;


