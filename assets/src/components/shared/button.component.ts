import {AppComponent} from "App/components/custom.element";
import { html, property } from 'lit-element';

export enum ButtonType  {
    DANGER = 'danger',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
    DARK = 'dark'
}

export default class ButtonComponent extends AppComponent {

    @property()
    public type: ButtonType;

    @property({type: String})
    public icon: string;

    @property()
    public label: string;

    render() {
        return html`
            <button class="btn gradient gradient-${this.type}">
                ${this.getIcon()}
                ${this.label}
            </button>
        `;
    }

    getIcon() {
        return this.icon ? html`<app-icon icon="${this.icon}"></app-icon>` : ``;
    }
}

