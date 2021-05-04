import {AppComponent} from "App/core/custom.element";
import {html, property, TemplateResult} from 'lit-element';

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

    public static getComponentName(): string {
        return 'app-button';
    }

    @property({type: String})
    private type: ButtonType;

    @property({type: String})
    private icon: string;

    @property({type: String})
    private label: string;

    @property({type: String})
    private link: string;

    public render(): TemplateResult {
        if (this.link) {
            return html`
            <a class="btn bg-${this.type}" href="${this.link}">
                ${this.getIcon()}
                ${this.label}
            </a>
        `;
        }
        return html`
            <button class="btn bg-${this.type}">
                ${this.getIcon()}
                ${this.label}
            </button>
        `;
    }

    private getIcon(): TemplateResult|string {
        return this.icon ? html`<app-icon icon="${this.icon}"></app-icon>` : ``;
    }
}

