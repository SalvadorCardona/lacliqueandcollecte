import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import cookie from "Media/shared/cookie.svg";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";

export default class CookiesBannerComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-cookies-banner';
    }


    public render(): TemplateResult {
        return html`
            <div class="cookies-content 
                border 
                rounded 
                p-3
                border-radius
                row" 
                 id="cookies-content">
                <div class="col-md-6
                    col-lg-8
                    fw-bolder 
                    text-body
                    mb-3" id="cookies-text">
                    <div class="cookie">
                        <img src="${cookie}" alt="cookie-banner"/>
                        <span class="d-none d-md-inline fw-bold text-dark">${this.trans("cookies.banner.title")}</span>
                    </div>
                    <div class="mt-2">
                        ${this.trans("cookies.banner.text")}
                    </div>
                </div>
                    <div class="col-md-6
                        d-flex
                        flex-row
                        justify-content-center
                        align-items-center
                        col-lg-4
                        ">
                        ${this.createElement(ButtonComponent, {
                            label: this.trans("cookies.banner.refuse"),
                        })}
                        ${this.createElement(ButtonComponent, {
                            label: this.trans("cookies.banner.accept"),
                            type: Color.DARK
                        })}
                    </div>
            </div>
        `;
    }
}
