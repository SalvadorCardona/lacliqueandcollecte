import {AppComponent} from 'App/types/custom.element';
import {property} from 'lit-element/lib/decorators';
import {html , TemplateResult} from 'lit-element';
import {PartnerPost} from "App/types/partner.type";

export default class PartnerCardComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-card';
    }

    @property({type: Object})
    private partnerPost: PartnerPost;

    public render(): TemplateResult {
        return html`
            <div class="border-radius p-3 d-flex justify-content-center" style="background-image: url("${this.partnerPost.meta.shopPicture}")">
                <div class="background-overlay"></div>
                ${this.partnerPost.meta.shopName}
            
            </div>
        `;
    }

}

