import {AppComponent} from 'App/types/custom.element';
import {html, property, TemplateResult} from "lit-element";
import {PartnerPost} from "App/types/partner.type";

export default class PartnerHeaderComponent extends AppComponent {

    @property({type: Object})
    private partnerPost: PartnerPost;

    public static getComponentName(): string {
        return 'app-partner-header';
    }

    public render(): TemplateResult {

        return html`
        <div id="partner-header" 
             class="app-wrapper
             background-overlay
             d-flex
             align-items-center
             flex-column
             position-relative" 
             style="background-image: url('${this.partnerPost.meta.shopPicture}')">
            <img id="picture" src="${this.partnerPost.meta.facePicture}" alt="face-picture">
            
            <div id="last-name" class="text-white">
                ${this.partnerPost.meta.firstName}
            </div>

            <hr>
            
            <h1>
                ${this.partnerPost.meta.shopName}
            </h1>

            <span>
                <app-icon icon="geoLat"></app-icon>
                Commerce situé dans la ville de ${this.partnerPost.meta.city}
            </span>
            
            <div id="social-header" class="position-absolute
                bottom-0
                end-0
                translate-middle
                d-flex
                justify-content-end">
                <a href=""><app-icon class="m-2" icon="facebook"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="instagram"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="twitter"></app-icon></a>
            </div>
        </div>
        `;
    }
}