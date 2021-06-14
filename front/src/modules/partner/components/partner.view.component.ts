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
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {Icon} from "App/enum/icon.enum";
import {Color} from "App/enum/color.enum";

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
                        <h4>${this.trans("partner.view.partner.name")}<span>${this.partnerPost.meta.firstName}</span>
                        </h4>
                        ${this.createElement(ProductLoopComponent, {idUser: this.partnerPost.postAuthor})}
                    </div>
                    <div class="col-md-4">
                        ${this.createElement(WrapperComponent, {
                            title: this.trans("partner.view.presentation.partner"),
                            body: html`
                                <p>
                                    ${this.partnerPost.meta.shopDescription}
                                </p>
                            `
                        })}
                        ${this.createElement(WrapperComponent, {
                            title: this.trans("partner.view.presentation.contact.information"),
                            body: this.getContact()
                        })}
                    </div>
                </div>
            </div>
        `;
    }

    private getContact(): TemplateResult {
        return html`
            <div>
                ${this.createElement(IconComponent, {color: Color.PRIMARY, icon: Icon.TELEPHONE})} :
                ${this.partnerPost.meta?.phone}
            </div>
            <div>
                ${this.createElement(IconComponent, {color: Color.PRIMARY, icon: Icon.FACEBOOK})} :
                ${this.partnerPost.meta?.facebook}
            </div>
            <div>
                ${this.createElement(IconComponent, {color: Color.PRIMARY, icon: Icon.TWITTER})} :
                ${this.partnerPost.meta?.twitter}
            </div>
            <div>
                ${this.createElement(IconComponent, {color: Color.PRIMARY, icon: Icon.INSTAGRAM})} :
                ${this.partnerPost.meta?.instagram}
            </div>
            <div>
                ${this.createElement(IconComponent, {color: Color.PRIMARY, icon: Icon.GEOLAT})} :
                ${this.partnerPost.meta?.street}, ${this.partnerPost.meta?.cityCode}, ${this.partnerPost.meta?.city}
            </div>
            <div>
                ${this.createElement(ButtonComponent,
                        {
                            icon: Icon.ENVELOPE,
                            type: Color.PRIMARY,
                            label: this.trans("partner.view.presentation.contact.button.label")
                        }
                )}
            </div>
        `;
    }
}
