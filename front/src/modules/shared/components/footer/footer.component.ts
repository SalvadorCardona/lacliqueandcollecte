import {AppComponent} from 'App/core/custom.element';
import {css, CSSResult, html, TemplateResult, unsafeCSS} from "lit-element";
import image from "Media/shared/pattern-footer.svg";
import IconComponent from "App/modules/shared/components/icon.component";
import {Icon} from "App/enum/icon.enum";

export default class FooterComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-footer';
    }

    public static get styles(): CSSResult {
        return css`
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
                                bg-primary">${this.trans("footer.follow")}
                                
                            </span>
                    </div>
                    <br>
                    <div class="social-wrapper">
                        <a class="m-2" href="fb.com">
                            ${this.createElement(IconComponent, {icon: Icon.FACEBOOK})}
                        </a>
                        <a class="m-2" href="tw.com">
                            ${this.createElement(IconComponent, {icon: Icon.TWITTER})}
                        </a>
                        <a class="m-2" href="inst.com">
                            ${this.createElement(IconComponent, {icon: Icon.INSTAGRAM})}
                        </a>
                    </div>
                    <br>
                    <div class="credit fw-bolder">
                        <span>${this.trans("footer.copyright")}</span>
                        <br>
                        <span>${this.trans("footer.rights")}</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footer.products")}</a></li>
                        <li><a href="/">${this.trans("footer.partners")}</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footer.asso")}</a></li>
                        <li><a href="/">${this.trans("footer.become.partner")}</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a href="/">${this.trans("footer.sales.terms")}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}
