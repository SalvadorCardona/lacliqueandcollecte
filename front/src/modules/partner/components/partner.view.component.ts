import {AppComponent} from 'App/core/custom.element';
import {html, property, TemplateResult} from 'lit-element';
import {injector} from "App/core/container.service";
import PartnerClient from "App/core/client/partner.client";
import LoaderService from "App/core/loader.service";
import {PartnerPost} from "App/types/partner.type";
import PartnerHeaderComponent from "App/modules/partner/components/partner.header.component";
import ProductLoopComponent from "App/modules/shared/components/product/product.loop.component";
import IconComponent from "App/modules/shared/components/icon.component";
import ButtonComponent from "App/modules/shared/components/button.component";

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
                    ${this.createElement(PartnerHeaderComponent, {partnerPost: this.partnerPost})}
                </div>
                <div id="partner-content" class="row">
                    <div class="col-md-8 ml-lg-0">
                        <h4>Les produits de <span>${this.partnerPost.meta.firstName}</span></h4>
                        ${this.createElement(ProductLoopComponent, {idUser: this.partnerPost.postAuthor})}
                    </div>
                    <div class="col-md-4">
                        <app-wrapper title="Présensation">
                            <p>
                                ${this.partnerPost.meta.shopDescription}
                            </p>
                        </app-wrapper>
                        <app-wrapper title="Contact du commerçant">
                            <div>
                                ${this.createElement(IconComponent, {icon: 'telephone'})} : ${this.partnerPost.meta?.phone}
                            </div>
                            <div>
                                ${this.createElement(IconComponent, {icon: 'facebook'})} : ${this.partnerPost.meta?.facebook}
                            </div>
                            <div>
                                ${this.createElement(IconComponent, {icon: 'twitter'})} : ${this.partnerPost.meta?.twitter}
                            </div>
                            <div>
                                ${this.createElement(IconComponent, {icon: 'instagram'})} : ${this.partnerPost.meta?.instagram}
                            </div>
                            <div>
                                ${this.createElement(IconComponent, {icon: 'geoLat'})} : ${this.partnerPost.meta?.street}, ${this.partnerPost.meta?.cityCode}, ${this.partnerPost.meta?.city}
                            </div>
                            <div>
                                ${this.createElement(ButtonComponent,
                                        {
                                        icon: 'envelope', 
                                        type: 'primary', 
                                        label: 'Contactez-le'
                                        }
                                )}
                            </div>
                        </app-wrapper>
                    </div>
                </div>
            </div>
        `;
    }
}
