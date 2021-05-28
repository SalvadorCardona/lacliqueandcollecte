import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeCitiesListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-cities-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container
                mt-5
                p-5
                text-center">
                <h2 class="title-border">Nos villes</h2>
                <app-cities-loop></app-cities-loop>
            </div>
        `;
    }
}
