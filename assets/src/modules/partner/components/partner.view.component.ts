import {AppComponent} from 'App/types/custom.element';
import {html, property, TemplateResult} from 'lit-element';
import {injector} from "App/core/container.service";
import PartnerClient from "App/core/client/partner.client";
import {LoaderService} from "App/core/loader.service";
import {PartnerPost} from "App/types/partner.type";

export default class PartnerViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-view';
    }

    @property({type: Object})
    private partnerPost: PartnerPost;

    @property({type: Number})
    private partnerPostId: number;

    @injector(PartnerClient)
    private productClient: PartnerClient;

    @injector(LoaderService)
    private loaderService: LoaderService;

    public firstUpdated(): void {
        this.productClient.getPartnerById(this.partnerPostId)
            .then(partner => {
                this.loaderService.hide();
                this.partnerPost = partner;
            });

        this.loaderService.show();
    }

    public render(): TemplateResult {
        if (!this.partnerPost) return html``;

        return html`
            <div class="container">
                <div class="row">
                    <app-partner-header .partnerPost="${this.partnerPost}"></app-partner-header>
                </div>
                <div id="partner-content" class="row">
                    <div class="col-md-8 ml-lg-0">
                        <h4>Les produits de <span>${this.partnerPost.meta.firstName}</span></h4>
                        <app-product-loop idUser="${this.partnerPost.postAuthor}"></app-product-loop>
                    </div>
                    <div class="col-md-4">
                        <app-wrapper title="Présensation">
                            <p>
                                ${this.partnerPost.meta.shopDescription}
                            </p>
                        </app-wrapper>
                        <app-wrapper title="Contact du commerçant">
                            <div>
                                <app-icon icon="telephone"></app-icon> : ${this.partnerPost.meta?.phone}
                            </div>
                            <div>
                                <app-icon icon="facebook"></app-icon> : ${this.partnerPost.meta?.facebook}
                            </div>
                            <div>
                                <app-icon icon="twitter"></app-icon>  : ${this.partnerPost.meta?.twitter}
                            </div>
                            <div>
                                <app-icon icon="instagram"></app-icon>  : ${this.partnerPost.meta?.instagram}
                            </div>
                            <div>
                                <app-icon icon="geoLat"></app-icon>  : ${this.partnerPost.meta?.street}, ${this.partnerPost.meta?.cityCode}, ${this.partnerPost.meta?.city}
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
