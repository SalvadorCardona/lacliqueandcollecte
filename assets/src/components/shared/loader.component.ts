import {AppComponent} from 'App/components/custom.element';
import { html } from 'lit-element';

export default class LoaderComponent extends AppComponent {
    public render() {
        return html`<div class="donutSpinner"></div>`;
    }
}

