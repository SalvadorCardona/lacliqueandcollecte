import {camelCase, kebabCase} from "lodash";

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

    window.customElements.define(component.selector, component);
};

// TODO : Make a better Prop
export const Prop = () =>  {
    return (component: AppHtmlElement, key): void => {
        console.log(component)
        console.log(key)
        component
        // component.props.push(kebabCase(key));
    }
}

export abstract class AppHtmlElement extends HTMLElement {
    public static props: Array<string>
    public static selector: string;

    attributeChangedCallback(key: string, oldValue: any, newValue: any) {
        let name = camelCase(key);

        if (oldValue !== newValue && this.hasOwnProperty(name)) {
            this[name] = newValue;
        }
    }
}

