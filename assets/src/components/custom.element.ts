import kebabCase from "lodash.kebabcase";
import {ContainerService} from "App/core/container.service";
import { LitElement } from 'lit-element';

export const getComponentSelector = (className: AppComponentDerived) =>  kebabCase('App' + className.name).replace('-component', '');

type AppComponentDerived = { new (): any };

export const createElement = <T>(Elem): T => {
    return document.createElement(getComponentSelector(Elem)) as T;
}

export abstract class AppComponent extends LitElement {

    protected createRenderRoot() {
        return this;
    }

    protected constructor() {
        super();
        this.onInit(ContainerService.get());
    }

    protected onInit(containerService: ContainerService): void {
        // implement me
    }
}

