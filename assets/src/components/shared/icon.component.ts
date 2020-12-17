import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {icon, findIconDefinition, IconPrefix, IconName, library} from '@fortawesome/fontawesome-svg-core'
import iconLoad from 'App/shared/icon.loaded'

library.add(...iconLoad);

@CustomElement()
export default class IconComponent extends AppHtmlElement {

    static selector = 'app-icon';

    public icon: IconName = 'airbnb';
    public domain: IconPrefix = 'fas';

    static get observedAttributes() { return ['icon', 'domain']; }

    connectedCallback() {
        // @ts-ignore
        console.log('Icon in component', this.icon)
        console.log('Domain in component', this.domain)
        const iconResult = findIconDefinition({ prefix: this.domain, iconName: this.icon });
        this.innerHTML = iconResult ? icon(iconResult).html[0] : 'not find';
    }
}

