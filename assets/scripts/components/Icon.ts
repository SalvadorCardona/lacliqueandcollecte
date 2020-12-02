import {CustomElement, Prop} from "custom-elements-ts";

@CustomElement({
    tag: 'app-icon',
    template: `<div>Je suis l'icon ${this.icon}</div>`
})
export default class Icon extends HTMLElement {
    @Prop() icon: string|null = null;
}