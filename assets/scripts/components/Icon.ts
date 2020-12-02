import {CustomElement, Prop} from "custom-elements-ts";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

@CustomElement({
    tag: 'app-icon',
    template: `<icon></icon>`
})
export default class Icon extends HTMLElement {
    @Prop() icon: string = '';

    connectedCallback() {
        // @ts-ignore
        this.shadowRoot.querySelector('icon').innerHTML = this.icon;
    }
}