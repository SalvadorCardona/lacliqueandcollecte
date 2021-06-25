import {LitElement} from 'lit-element';
import {injector} from "App/modules/shared/services/container.service";
import TranslateService from "App/modules/shared/services/translate.service";
import {ComponentName} from "App/modules/shared/types/module.type";

// @ts-ignore
export const getComponentSelector = (componentName: ComponentName): string =>  componentName.getComponentName();

export const createElement = <T extends AppComponent>(Component: new() => T, args: {[name: string]: any}|null = null): T => {
    let component = new Component();

    if (args) {
        component = Object.assign(component, args);
    }

    return component;
}

export abstract class AppComponent extends LitElement {

    @injector(TranslateService)
    private translateService: TranslateService;

    protected createElement: CallableFunction = createElement;

    protected trans(key: string): string
    {
        return this.translateService.translate(key);
    }

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