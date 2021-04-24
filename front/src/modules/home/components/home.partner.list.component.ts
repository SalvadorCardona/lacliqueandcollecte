import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomePartnerListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-partner-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container
                mt-5
                p-5
                text-center">
                <h2 class="title-border">Partenaires</h2>
                <app-partner-loop></app-partner-loop>
            </div>
        `;
    }
}
