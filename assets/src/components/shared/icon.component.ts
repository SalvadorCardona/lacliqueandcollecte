import {AppComponent} from 'App/components/custom.element';
import {icons} from 'App/shared/icons'
import {html, property, TemplateResult} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class IconComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-icon';
    }

    @property({type: String})
    private icon: string;

    public render(): TemplateResult {
        return html`${unsafeHTML(icons[this.icon] ? icons[this.icon] : '')}`;
    }
}
