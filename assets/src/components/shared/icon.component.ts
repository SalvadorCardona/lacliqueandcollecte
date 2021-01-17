import {AppComponent} from 'App/components/custom.element';
import {icons} from 'App/shared/icons'
import {html, property } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class IconComponent extends AppComponent {
    @property({type: String})
    private icon: string;

    public render() {
        return html`${unsafeHTML(icons.hasOwnProperty(this.icon) ? icons[this.icon] : '')}`;
    }
}
