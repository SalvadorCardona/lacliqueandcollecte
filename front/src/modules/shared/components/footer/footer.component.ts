import {AppComponent} from 'App/core/custom.element';
import {css, CSSResult, html, TemplateResult, unsafeCSS} from "lit-element";
import image from "Media/shared/pattern-footer.svg";
import IconComponent from "App/modules/shared/components/icon.component";

export default class FooterComponent extends AppComponent{

    public static getComponentName(): string{
        return 'app-footer';
    }

    public static get styles(): CSSResult {
        return  css`
            app-footer::after {
              background-image: url('${unsafeCSS(image)}');
            }
        `;
    }

    public connectedCallback(): void {
        super.connectedCallback();
        this.classList.add('container-fluid', 'd-block', 'p-5', 'position-relative');
    }

    public render(): TemplateResult {
        return html`
            <div class="row">
                <div class="branding-space
                        col-md-3
                        text-center">
                    <div class="follow-me text-white">
                            <span class="
                                fw-bolder
                                text-uppercase
                                border-radius
                                fs-5
                                p-3
                                bg-primary">${this.trans("footerFollow")}
                                
                            </span>
                    </div>
                    <br>
                    <div class="social-wrapper">
                        <a class="m-2" href="fb.com">
                            ${this.createElement(IconComponent, {icon: this.trans("footerComponentIconFacebook")})}
                        </a>
                        <a class="m-2" href="tw.com">
                            ${this.createElement(IconComponent, {icon: this.trans("footerComponentIconTwitter")})}
                        </a>
                        <a class="m-2" href="inst.com">
                            ${this.createElement(IconComponent, {icon: this.trans("footerComponentIconInstagram")})}
                        </a>
                    </div>
                    <br>
                    <div class="credit fw-bolder">
                        <span>${this.trans("footerCopyright")}</span>
                        <br>
                        <span>${this.trans("footerRight")}</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footerProducts")}</a></li>
                        <li><a href="/">${this.trans("footerPartners")}</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footerAsso")}</a></li>
                        <li><a href="/">${this.trans("footerBecomePartner")}</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footerSalesTerms")}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}
