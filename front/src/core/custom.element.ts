import {LitElement} from 'lit-element';

export const getComponentSelector = (className: typeof AppComponent): string =>  className.getComponentName();

export const createElement = <T extends AppComponent>(Component: new() => T, args: {[name: string]: any}|null = null): T => {
    let component = new Component();

    if (args) {
        component = Object.assign(component, args);
    }

    return component;
}

export abstract class AppComponent extends LitElement {

    protected createElement: CallableFunction = createElement;

    public static getComponentName(): string {
        throw new Error("Method not implemented.");
    }

    protected initialize(): void {
        super.initialize();
        // @ts-ignore
        (this.constructor as typeof LitElement)._getUniqueStyles();
        (this as {
            renderRoot: Element|DocumentFragment;
        }).renderRoot = this.createRenderRoot();

        this["_needsShimAdoptedStyleSheets"] = true;
    }


    protected createRenderRoot(): this {
        return this;
    }

    public static create(...args: any): any {
        throw new Error("Method not implemented.");
    }
}