import {property} from "lit-element/lib/decorators";
import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";

export default class WrapperComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-wrapper';
    }

    @property({type: String})
    public title: string;

    @property({type: HTMLElement})
    private body: TemplateResult;

    public render(): TemplateResult {
        return html`
            ${this.title ? 
                html`<div class="title">${this.title}</div>`:
                ''
            }
            ${this.body}
        `;
    }
}