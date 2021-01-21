import {AppComponent} from "App/components/custom.element";
import { html, property , TemplateResult } from 'lit-element';

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
    private type: ButtonType;

    @property({type: String})
    private icon: string;

    @property()
    private label: string;

    public render(): TemplateResult {
        return html`
            <button class="btn gradient gradient-${this.type}">
                ${this.getIcon()}
                ${this.label}
            </button>
        `;
    }

    private getIcon(): TemplateResult|string {
        return this.icon ? html`<app-icon icon="${this.icon}"></app-icon>` : ``;
    }
}

