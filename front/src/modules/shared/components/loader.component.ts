import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class LoaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-loader';
    }

    public render(): TemplateResult {
        return html`<div class="donut-spinner"></div>`;
    }
}