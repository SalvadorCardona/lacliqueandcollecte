import {AppComponent} from 'App/types/custom.element';
import {css, CSSResult, html, TemplateResult, unsafeCSS} from "lit-element";
import image from "Media/shared/pattern-footer.svg";

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
                        col-3
                        text-center">
                    <div class="follow-me text-white">
                            <span class="
                                fw-bolder
                                text-uppercase
                                border-radius
                                fs-5
                                p-3
                                bg-primary">
                                suivez zartizana
                            </span>
                    </div>
                    <br>
                    <div class="social-wrapper">
                        <a class="m-2" href="fb.com">
                            <app-icon icon="facebook"></app-icon>
                        </a>
                        <a class="m-2" href="tw.com">
                            <app-icon icon="twitter"></app-icon>
                        </a>
                        <a class="m-2" href="inst.com">
                            <app-icon icon="instagram"></app-icon>
                        </a>
                    </div>
                    <br>
                    <div class="credit fw-bolder">
                        <span>©2021 Zatizana, Inc</span>
                        <br>
                        <span>All rights reserved</span>
                    </div>
                </div>
                <div class="col-3">
                    <ul>
                        <li><a href="/">Nos produits</a></li>
                        <li><a href="/">Nos artisans</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li><a href="/">L'association</a></li>
                        <li><a href="/">Devenir partenaire</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li><a href="/">Conditions générales</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}