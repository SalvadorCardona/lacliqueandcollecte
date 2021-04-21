import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';
import {getBaseSiteUrl} from "App/shared/helper";
import image1 from "Media/Image1.jpg";
import image2 from "Media/Image2.jpg";
import image3 from "Media/Image3.jpg";


export default class HomeOtherDirectionComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-other-direction';
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid">
                <div class="row">
                    <div class="with-background col-md-4" style="background-image: url('${image2}')"></div>
                    <div class="without-background col-md-4" >
                        <div class="h-50"><h4 class="fw-normal text-dark">Zartisana</h4></div>
                        <div class="h-50">
                            <span>Qui sommes-nous?</span>
                            <app-button icon="" label="Notre histoire" type="primary"> </app-button>
                            
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image3}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 class="fw-normal text-dark">Vous êtes artisan ?</h4></div>
                        <div class="h-50">
                            <span>Devenez partenaire de notre association.</span>
                            <app-button icon="" label="Contactez-nous" type="primary"> </app-button>
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image1}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 id="title-3" class="fw-normal text-dark">Découvrez les artisans et produits Zartizana.</h4></div>
                        <div class="h-50">
                            <app-button icon="" label="Le shop ici" type="primary"> </app-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
