import {AppComponent} from 'App/components/custom.element';
import {html, property, TemplateResult} from 'lit-element';
import {injector} from "App/core/container.service";
import PartnerClient from "App/core/client/partner.client";
import {LoaderService} from "App/core/loader.service";
import {PartnerType} from "App/types/partner.type";

export default class PartnerViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-view';
    }

    @property({type: Object})
    private partner: PartnerType;

    @property({type: Number})
    private partnerId: number;

    @injector(PartnerClient)
    private productClient: PartnerClient;

    @injector(LoaderService)
    private loaderService: LoaderService;

    public firstUpdated(): void {
        this.productClient.getPartnerById(this.partnerId)
            .then(partner => {
                console.log(partner);
                this.loaderService.hide();
                this.partner = partner;
            });

        this.loaderService.show();
    }

    public render(): TemplateResult {
        if (!this.partner) return html``;

        return html`
            <div class="container">
                <div class="row">
                    <app-partner-header></app-partner-header>
                </div>
                <div id="partner-content" class="row">
                    <div class="col-md-8 ml-lg-0">
                        <h4>Les produits de Céline</h4>
                        <app-product-loop idUser="1"></app-product-loop>
                    </div>
                    <div class="col-md-4">
                        <app-wrapper title="Présensation">
                            <p>
                                La touche de bois est un atelier indépendant depuis 2007 spécialisé dans le travail de bois. Céline la gérante de l'atelier à parcouru plusieurs pays et travaillé dans de nombreux coin dans le monde avant d'ouvrir son atelier. Aujourd'hui avec son équipe, elle sera des objets pour décorer les pièces de votre maison....
                            </p>
                        </app-wrapper>
                        <app-wrapper title="Contact du commerçant">
                            <div>
                                <app-icon icon="telephone"></app-icon> : 0383474156
                            </div>
                            <div>
                                <app-icon icon="facebook"></app-icon> : @toucheDeBois
                            </div>
                            <div>
                                <app-icon icon="twitter"></app-icon>  : @toucheDeBois
                            </div>
                            <div>
                                <app-icon icon="instagram"></app-icon>  : @toucheDeBois
                            </div>
                            <div>
                                <app-icon icon="geoLat"></app-icon>  : 30 rue pasteur, Lyon, 69001
                            </div>
                            <div>
                                <app-button icon="envelope" type="primary" label="Contactez-le"></app-button>
                            </div>
                        </app-wrapper>
                    </div>
                </div>
            </div>
        `;
    }
}
