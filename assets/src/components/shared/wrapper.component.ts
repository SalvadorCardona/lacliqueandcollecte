import { property } from "lit-element/lib/decorators";
import {AppComponent} from "App/components/custom.element";
import { html } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class WrapperComponent extends AppComponent {
    @property({type: String})
    public title: string;

    constructor() {
        super();
        this.classList.add('app-wrapper');
    }

    public render() {
        return html`
            ${this.title ? 
                html`<div class="title">${this.title}</div>`:
                ''
            }
            ${unsafeHTML(this.innerHTML)}
        `;
    }
}