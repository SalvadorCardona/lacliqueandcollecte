import {AppComponent} from 'App/core/custom.element';
import {icons} from 'App/core/icons'
import {html, property, TemplateResult} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Color} from "App/enum/color.enum";

export default class IconComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-icon';
    }

    @property({type: String})
    private icon: string;

    @property({type: String})
    private color: Color;

    public connectedCallback(): void {
        this.classList.add(this.color);
        super.connectedCallback();
    }

    public render(): TemplateResult {
        return html`${unsafeHTML(icons[this.icon] ? icons[this.icon] : '')}`;
    }
}
