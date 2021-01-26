import {AppComponent} from 'App/components/custom.element';
import {html , TemplateResult} from 'lit-element';

export default class LoaderComponent extends AppComponent {
    public render(): TemplateResult {
        return html`<div class="donutSpinner"></div>`;
    }
}

