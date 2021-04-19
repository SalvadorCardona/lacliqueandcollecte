import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomePartnerListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-partner-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid p-5 text-center">
                <h2 class="title
                    text-primary
                    text-uppercase">Partenaires</h2>
                <app-partner-loop></app-partner-loop>
            </div>
        `;
    }
}
