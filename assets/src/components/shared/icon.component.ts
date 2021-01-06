import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {icons} from 'App/shared/icons'

@CustomElement()
export default class IconComponent extends AppHtmlElement {

    static selector = 'app-icon';

    public icon: string = 'airbnb';

    static get observedAttributes() { return ['icon', 'domain']; }

    render() {
        return icons.hasOwnProperty(this.icon) ? icons[this.icon] : 'undefined';
    }
}

