import {html, TemplateResult} from 'lit-element';
import {AppComponent} from "App/modules/shared/services/custom.element";

export default class PageNotFoundViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-page-not-found';
    }

    public render(): TemplateResult {
        return html`
            <header class="page-header">
                <h1 class="entry-title">The page can’t be found.</h1>
            </header>
            <div class="page-content">
                <p>It looks like nothing was found at this location.</p>
            </div>
        `;
    }
}