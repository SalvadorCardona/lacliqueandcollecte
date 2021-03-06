import {AppComponent} from 'App/modules/shared/services/custom.element';
import {html, property, TemplateResult} from "lit-element";
import {PartnerPost} from "App/modules/shared/types/partner.type";
import IconComponent from "App/modules/shared/components/icon.component";
import {Icon} from "App/modules/shared/enum/icon.enum";

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
                <h1>${this.partnerPost.meta.shopName}</h1>
                <span>
                ${this.createElement(IconComponent, {icon: Icon.GEOLAT})}
                ${this.trans("partner.header.city")}${this.partnerPost.meta.city}
                </span>
                <div id="social-header" class="position-absolute
                bottom-0
                end-0
                translate-middle
                d-flex
                justify-content-end">
                    <a href="">
                        ${this.createElement(IconComponent,
                            {
                                classList: 'md-2',
                                icon: Icon.FACEBOOK,
                            }
                        )}
                    </a>
                    <a href="">
                        ${this.createElement(IconComponent,
                            {
                                classList: 'md-2',
                                icon: Icon.INSTAGRAM
                            }
                        )}
                    </a>
                    <a href="">
                        ${this.createElement(IconComponent,
                            {
                                classList: 'md-2',
                                icon: Icon.TWITTER
                            }
                        )}
                    </a>
                </div>
            </div>
        `;
    }
}
