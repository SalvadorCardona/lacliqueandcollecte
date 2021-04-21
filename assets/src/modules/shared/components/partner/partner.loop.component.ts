import {AppComponent} from "App/types/custom.element";
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import {PartnerPost} from "App/types/partner.type";
import PartnerClient from "App/core/client/partner.client";

export default class PartnerLoopComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-loop';
    }

    @property({type: Object})
    private partnersPost: PartnerPost[]

    @injector(PartnerClient)
    private partnerClient: PartnerClient;

    protected firstUpdated() {
        this.partnerClient.getPartners()
            .then(partnersPost => {
                this.partnersPost = partnersPost;
            })
    }

    public render(): TemplateResult {
        if (!this.partnersPost) return html``;

        return html`
            <div class="row">
                ${this.partnersPost.map(partnerPost => html`<app-partner-card class="mt-3 col-md-4" .partnerPost="${partnerPost}"></app-partner-card>`)}
            </div>
        `;
    }
}
