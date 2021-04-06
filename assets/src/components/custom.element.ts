import kebabCase from "lodash.kebabcase";
import {LitElement} from 'lit-element';

export const getComponentSelector = (className: typeof AppComponent): string =>  {
    
        console.log(AppComponent.getComponentName());
        return AppComponent.getComponentName()
    };

export const createElement = <T>(Elem: typeof AppComponent): T => {
    // @ts-ignore
    return document.createElement(getComponentSelector(Elem)) as T;
}

export abstract class AppComponent extends LitElement {
    static getComponentName(): string {
        throw new Error("Method not implemented.");
    }
    protected createRenderRoot(): this {
        return this;
    }
}