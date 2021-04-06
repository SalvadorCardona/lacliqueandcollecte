import {property} from "lit-element/lib/decorators";
import {AppComponent} from "App/components/custom.element";
import {html , TemplateResult} from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class WrapperComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-wrapper';
    }

    @property({type: String})
    public title: string;

    public firstUpdated(): void {
        this.classList.add('app-wrapper');
    }

    public render(): TemplateResult {
        return html`
            ${this.title ? 
                html`<div class="title">${this.title}</div>`:
                ''
            }
            ${unsafeHTML(this.innerHTML)}
        `;
    }
}