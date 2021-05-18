import {AppComponent} from "App/core/custom.element";
import {html, property, TemplateResult} from 'lit-element';
import {Color} from "App/enum/color.enum";
import IconComponent from "App/modules/shared/components/icon.component";

export default class ButtonComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-button';
    }

    @property({type: String})
    private type?: Color;

    @property({type: String})
    private icon?: string;

    @property({type: String})
    private label?: string;

    @property({type: String})
    private link?: string;

    @property({type: Function})
    private $click?: CallableFunction;

    public connectedCallback(): void {
        super.connectedCallback();
        if (this.$click) {
            this.addEventListener('click', () => {
                this.$click();
            })
        }
    }

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
        return this.icon ? this.createElement(IconComponent, {
            icon: this.icon
        }) : ``;
    }
}

