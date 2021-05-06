import {property} from "lit-element/lib/decorators";
import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class WrapperComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-wrapper';
    }

    @property({type: String})
    public title: string;

    @property({type: HTMLElement})
    private body: HTMLElement|TemplateResult;

    public render(): TemplateResult {
        return html`
            ${this.title ? 
                html`<div class="title">${this.title}</div>`:
                ''
            }
            ${unsafeHTML(this.body || this.innerHTML)}
        `;
    }
}