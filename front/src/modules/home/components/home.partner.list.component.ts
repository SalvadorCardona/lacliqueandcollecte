import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import PartnerLoopComponent from "App/modules/shared/components/partner/partner.loop.component";

export default class HomePartnerListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-partner-list';
    }

    public render(): TemplateResult {
        return html`
            <div class="container
                p-5
                text-center">
                <h2 class="title-border">Partenaires</h2>
                ${this.createElement(PartnerLoopComponent)}
            </div>
        `;
    }
}
