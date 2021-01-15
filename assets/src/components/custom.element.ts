import camelCase from 'lodash.camelcase';
import kebabCase from "lodash.kebabcase";
import {ServiceContainer} from "App/core/service.container";

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

    public addEventClick(selector: string, callBack: Function): void {
        this.addEvent(selector, 'click', callBack);
    }
}

