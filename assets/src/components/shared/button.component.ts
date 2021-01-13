import {AppHtmlElement, CustomElement, Prop} from 'App/components/custom.element';

@CustomElement()
export default class ButtonComponent extends AppHtmlElement {
    public type?: string = null;

    public icon?: string = null;

    public label?: string = null;

    private _$click: Function;

    static get observedAttributes() { return ['type', 'icon', 'label']; }

    set $click(value: Function) {
        this._$click = value;
    }

    afterRender() {
        if (!this._$click) return

        this.addEvent('button', 'click', _ => this._$click());
    }

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

