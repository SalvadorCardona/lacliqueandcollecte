import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";

export default class WrapperComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-router';
    }

    public firstUpdated(): void {
        this.classList.add('app-wrapper');
    }

    public render(): TemplateResult {
        return html`

        `;
    }
}