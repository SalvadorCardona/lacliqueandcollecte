import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from "lit-element";
import {getBaseSiteUrl} from "App/shared/helper";

export default class PartnerHeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-header';
    }

    public render(): TemplateResult {
        return html`
        <div id="partner-header" class="app-wrapper d-flex align-items-center flex-column position-relative" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2020/11/atelier.jpg')">
            <div class="background-overlay"></div>
            <img id="picture" src="${getBaseSiteUrl()}/app/uploads/2020/11/artisant.jpg" alt="face-picture">
            
            <div id="last-name" class="text-white">
                Céline
            </div>

            <hr>
            
            <h1>
                La touche de bois            </h1>

            <span>
                <app-icon icon="geoLat"></app-icon>
                Commerce situé dans la ville de Lyon
            </span>
            
            <div id="social-header" class="position-absolute bottom-0 end-0  translate-middle d-flex justify-content-end">
                <a href=""><app-icon class="m-2" icon="facebook"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="instagram"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="twitter"></app-icon></a>
            </div>
        </div>
        `;
    }
}