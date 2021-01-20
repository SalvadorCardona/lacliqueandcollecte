import kebabCase from "lodash.kebabcase";
import {ServiceContainer} from "App/core/service.container";
import { LitElement } from 'lit-element';

export const getComponentSelector = (className: AppComponent) =>  kebabCase('App' + className.name).replace('-component', '');

export const createElement = <T>(Elem): T => {
    return document.createElement(getComponentSelector(Elem)) as T;
}

export abstract class AppComponent extends LitElement {

    protected createRenderRoot() {
        return this;
    }

    protected constructor() {
        super();
        this.onInit(ServiceContainer.get());
    }

    protected onInit(serviceContainer: ServiceContainer): void {
        // implement me
    }

}

