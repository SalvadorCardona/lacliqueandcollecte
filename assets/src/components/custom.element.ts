import {LitElement} from 'lit-element';

export const getComponentSelector = (className: typeof AppComponent): string =>  className.getComponentName();

export const createElement = <T>(Elem: typeof AppComponent): T => {
    // @ts-ignore
    return document.createElement(getComponentSelector(Elem)) as T;
}

export abstract class AppComponent extends LitElement {

    public static getComponentName(): string {
        throw new Error("Method not implemented.");
    }

    protected createRenderRoot(): this {
        return this;
    }

}