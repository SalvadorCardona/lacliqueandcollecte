import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, property, TemplateResult} from 'lit-element';
import {Color} from "App/modules/shared/enum/color.enum";
import IconComponent from "App/modules/shared/components/icon.component";
import {Icon} from "App/modules/shared/enum/icon.enum";

export default class ButtonComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-button';
    }

    @property({type: String})
    private type?: Color;

    @property({type: Icon})
    private icon?: Icon;

    @property({type: String})
    private label?: string;

    @property({type: String})
    private link?: string;

    @property({type: Function})
    private $click?: CallableFunction;

    @property({type: Boolean})
    private isSubmit: boolean = false;

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

        if (this.isSubmit) {
            return html`
                <input type="submit" class="btn bg-${this.type}" value=${this.label}>
                    ${this.getIcon()}
                </input>
            `;
        }

        return html`
            <button class="btn bg-${this.type}">
                ${this.getIcon()}
                ${this.label}
            </button>
        `;
    }

    private getIcon(): TemplateResult | string {
        return this.icon ? this.createElement(IconComponent, {
            icon: this.icon
        }) : ``;
    }
}

