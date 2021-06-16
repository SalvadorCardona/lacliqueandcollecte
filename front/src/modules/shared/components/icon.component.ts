import {AppComponent} from 'App/modules/shared/services/custom.element';
import {icons} from 'App/modules/shared/services/icons'
import {html, property, TemplateResult} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Color} from "App/enum/color.enum";
import {Icon} from "App/enum/icon.enum";

export default class IconComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-icon';
    }

    @property({type: Icon})
    private icon: Icon;

    @property({type: String})
    private color?: Color;

    @property({type: String})
    private height?: string;

    @property({type: String})
    private width?: string;

    public connectedCallback(): void {
        if(this.color) {
            this.classList.add(this.color)
        }
        super.connectedCallback();
    }

    public firstUpdated(): void {
        const svg = this.querySelector('svg');
        if (this.width) {
            svg.style.width = this.width;
        }
        if (this.height) {
            svg.style.height = this.height;
        }
        if (this.color){
            svg.style.fill = this.color;
        }
    }

    public render(): TemplateResult {
        return html`<i>${unsafeHTML(icons[this.icon] ? icons[this.icon] : '')}</i>`;
    }
}
