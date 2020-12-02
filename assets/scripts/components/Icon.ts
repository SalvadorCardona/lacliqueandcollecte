import {CustomElement, Prop} from "custom-elements-ts";
import { library, icon, findIconDefinition, IconPrefix, IconName  } from '@fortawesome/fontawesome-svg-core'
// import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

library.add(
    faMapMarkedAlt,
);

@CustomElement({
    tag: 'app-icon',
    template: `<icon></icon>`
})
export default class Icon extends HTMLElement {
    defaultIcon: string  = 'airbnb';
    defaultDomain: string  = 'far';
    @Prop() icon: IconName = 'airbnb';
    @Prop() domain: IconPrefix = 'far';

    connectedCallback() {
        const iconResult = findIconDefinition({ prefix: this.domain || this.defaultDomain, iconName: this.icon || this.defaultIcon });

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = icon(iconResult).html[0];
        }
    }
}