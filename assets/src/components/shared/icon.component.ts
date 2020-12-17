import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {icon, findIconDefinition, IconPrefix, IconName, library} from '@fortawesome/fontawesome-svg-core'
import iconLoad from 'App/shared/icon.loaded'

library.add(...iconLoad);

@CustomElement()
export default class IconComponent extends AppHtmlElement {

    static selector = 'app-icon';

    private defaultIcon: string  = 'airbnb';
    private defaultDomain: string  = 'far';

    public icon: IconName = 'airbnb';
    public domain: IconPrefix = 'far';

    static get observedAttributes() { return ['icon', 'domain']; }

    connectedCallback() {
        // @ts-ignore
        const iconResult = findIconDefinition({ prefix: this.domain || this.defaultDomain, iconName: this.icon || this.defaultIcon });
        this.innerHTML = iconResult ? icon(iconResult).html[0] : 'not find';
    }
}

