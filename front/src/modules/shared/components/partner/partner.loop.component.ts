import {AppComponent} from "App/modules/shared/services/custom.element";
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/modules/shared/services/container.service";
import {PartnerPost} from "App/types/partner.type";
import PartnerClient from "App/modules/shared/services/client/partner.client";
import PartnerCardComponent from "App/modules/shared/components/partner/partner.card.component";

export default class PartnerLoopComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-loop';
    }

    @property({type: Object})
    private partnersPost: PartnerPost[]

    @injector(PartnerClient)
    private partnerClient: PartnerClient;

    protected firstUpdated(): void {
        this.partnerClient.getPartners()
            .then(partnersPost => {
                this.partnersPost = partnersPost;
            })
    }

    public render(): TemplateResult {
        if (!this.partnersPost) return html``;

        return html`
            <div class="row">
                ${this.partnersPost.map(partnerPost => html`${this.createElement(PartnerCardComponent, {classList: "mt-3 col-md-4", partnerPost: partnerPost})}`)}
            </div>
        `;
    }
}
