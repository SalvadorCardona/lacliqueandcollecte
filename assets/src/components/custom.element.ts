import kebabCase from "lodash.kebabcase";
import {ContainerService} from "App/core/container.service";
import { LitElement } from 'lit-element';

export const getComponentSelector = (className: typeof AppComponent): string =>  kebabCase('App' + className.name).replace('-component', '');

export const createElement = <T>(Elem: typeof AppComponent): T => {
    return document.createElement(getComponentSelector(Elem)) as unknown as T;
}

export abstract class AppComponent extends LitElement {

    protected createRenderRoot(): this {
        return this;
    }

    protected constructor() {
        super();
        this.onInit(ContainerService.get());
    }

    protected onInit(containerService: ContainerService): void {
        return;
    }
}

