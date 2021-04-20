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
            <div style="background-image: url('${this.partnerPost.meta.shopPicture}')" 
                class="border-radius
                overflow-hidden
                background-overlay
                p-4
                position-relative
                d-flex
                justify-content-center
                flex-column
                align-items-center
                align-content-center">
                <div class="background-overlay"></div>
                <img src="${this.partnerPost.meta.facePicture}" alt="photo-partner">
                <h3 class="mt-3 text-white">${this.partnerPost.meta.shopName}</h3>
                <div class="wrapper-category text-white">#decoration #makrame</div>
                <app-button label="Voir sa page" type="primary"> </app-button>
            </div>
        `;
    }
}

