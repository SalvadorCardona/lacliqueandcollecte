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

}