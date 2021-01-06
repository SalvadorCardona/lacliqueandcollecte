import {AppHtmlElement, CustomElement, Prop} from 'App/components/custom.element';
import IconComponent from "App/components/shared/icon.component";

@CustomElement()
export default class ButtonComponent extends AppHtmlElement {
    @Prop()
    public type?: string = null;
    @Prop()
    public icon?: string = null;
    @Prop()
    public label?: string = null;

    static selector = 'app-button';

    static get observedAttributes() { return ['type', 'icon', 'label']; }

    render() {
        return `
            <button class="btn gradient gradient-${this.type}">
                ${this.getIcon()}
                ${this.label}
            </button>
        `;
    }

    getIcon() {
        return this.icon ? `<app-icon icon="${this.icon}"></app-icon>` : '';
    }
}

