import kebabCase from "lodash.kebabcase";
import {LitElement} from 'lit-element';

export const getComponentSelector = (className: typeof AppComponent): string =>  kebabCase('App' + className.name).replace('-component', '');

export const createElement = <T>(Elem: typeof AppComponent): T => {
    // @ts-ignore
    return document.createElement(getComponentSelector(Elem)) as T;
}

export abstract class AppComponent extends LitElement {
    protected createRenderRoot(): this {
        return this;
    }
}