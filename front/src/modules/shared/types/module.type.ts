import {AppComponent} from "App/modules/shared/services/custom.element";

export default interface Module {
    services?: Array<ServiceName>;
    components?: Array<ComponentName>;
    defaultComponent?: ComponentName
}

export type Service = any;
export type ServiceName = new () => Service;
export type ComponentName = new <T extends AppComponent>() => T;
