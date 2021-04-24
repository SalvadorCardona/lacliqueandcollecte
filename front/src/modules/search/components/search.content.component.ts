import {AppComponent} from "App/core/custom.element";
import {html , TemplateResult} from "lit-element";

export default class SearchContentComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-search-content';
    }

    public render(): TemplateResult {
        return html`
            <app-product-loop perPage="15" grid="3"></app-product-loop>
        `;
    }
}