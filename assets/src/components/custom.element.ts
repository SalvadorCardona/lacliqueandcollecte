import camelCase from 'lodash.camelcase';
import kebabCase from "lodash.kebabcase";
import {ServiceContainer} from "App/core/service.container";

interface CustomElementConfig {
    selector?:string;
    template?: string;
    style?: string;
    useShadow?: boolean;
}

const validateSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};

export const CustomElement = (config: CustomElementConfig = {}) => (component: any) => {

    // validateSelector(component.selector);
    //
    // if (config.style) {
    //     config.template = `<style>${config.style}</style> ${config.template}`;
    // }
    //
    // customElements.define(component.selector, component);
};

// TODO : Make a better Prop
export const Prop = () =>  {
    return (component: AppHtmlElement, key): void => {
        // component.addProps(kebabCase(key));
    }
}

export const createElement = <T>(elem): T => {
    return document.createElement(elem.getSelectorName());
}

export abstract class AppHtmlElement extends HTMLElement {

    public static getSelectorName() {
        return kebabCase('App' + this.name).replace('-component', '');
    }

    attributeChangedCallback(key: string, oldValue: any, newValue: any) {
        let name = camelCase(key);

        if (oldValue !== newValue && this.hasOwnProperty(name)) {
            this[name] = newValue;
        }
    }

    public onMounted(): void {}
    public afterRender(): void {}

    public printRender(): void {
        this.innerHTML = this.render();
        this.afterRender();
    }

    public connectedCallback(): void {
        // TODO: get syntax with onInit
        // @ts-ignore
        if (typeof this.onInit === 'function') {
            // @ts-ignore
            this.onInit(ServiceContainer.get());
        }

        this.printRender();
        this.onMounted();
    }

    public render(): string {
        return '';
    }

    public addEvent(selector: string, type: string, callBack: Function): void {
        this.querySelector(selector).addEventListener(type, _ => callBack());
    }
}

