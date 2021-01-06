import {camelCase, kebabCase} from "lodash";
import components from "App/app.components";

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

    validateSelector(component.selector);

    if (config.style) {
        config.template = `<style>${config.style}</style> ${config.template}`;
    }

    component.shareTest = () => {
        return 'testProps'
    };
    // component.prototype.append('test');
    // if (config.template) {
    //     const template = document.createElement('template');
    //     const connectedCallback = component.prototype.connectedCallback || function () {};
    //     component.prototype.connectedCallback = function() {
    //         const clone = document.importNode(template.content, true);
    //         if (config.useShadow) {
    //             this.attachShadow({mode: 'open'}).appendChild(clone);
    //         } else {
    //             this.appendChild(clone);
    //         }
    //         connectedCallback.call(this);
    //     };
    //
    //     template.innerHTML = config.template;
    // }
    // console.log(component)
    // console.log(component.getProps())
    // component.prototype.test = 'testsqdsqdsqssss';
    customElements.define(component.selector, component);
};

// TODO : Make a better Prop
export const Prop = () =>  {
    return (component: AppHtmlElement, key): void => {
        // component.addProps(kebabCase(key));
    }
}

export abstract class AppHtmlElement extends HTMLElement {
    public static selector: string;

    attributeChangedCallback(key: string, oldValue: any, newValue: any) {
        let name = camelCase(key);

        if (oldValue !== newValue && this.hasOwnProperty(name)) {
            this[name] = newValue;
        }
    }

    public onInit(): void {}
    public printRender(): void {
        this.innerHTML = this.render();
    }

    public connectedCallback(): void {
        this.onInit();
        this.printRender();
    }

    public render(): string {
        return '';
    }
}

