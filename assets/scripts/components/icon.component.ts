import {CustomElement} from './custom.element';
import {icon, findIconDefinition, IconPrefix, IconName, library} from '@fortawesome/fontawesome-svg-core'
import iconLoad from './../shared/icon.loaded'

library.add(...iconLoad);

@CustomElement({
    selector: 'app-icon',
    template: `<icon></icon>`
})
export default class IconComponent extends HTMLElement {
    private defaultIcon: string  = 'airbnb';
    private defaultDomain: string  = 'far';

    public icon: IconName = 'airbnb';
    public domain: IconPrefix = 'far';

    static get observedAttributes() { return ['icon', 'domain']; }

    attributeChangedCallback (name: string, oldValue: any, newValue: any) {
        if (oldValue !== newValue && this.hasOwnProperty(name)) {
            // @ts-ignore
            this[name] = newValue;
        }
    }

    connectedCallback() {
        const iconResult = findIconDefinition({ prefix: this.domain || this.defaultDomain, iconName: this.icon || this.defaultIcon });
        this.innerHTML = icon(iconResult).html[0];
    }
}