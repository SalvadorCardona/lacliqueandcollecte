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
                mb-3" id="cookies-content">
                <div class="row 
                    m-3 
                    no-gutter">
                    <div class="col-1 
                        cookie 
                        d-none 
                        d-md-block">
                        <img class="" id="cookie" src="${cookie}" alt="cookie-banner"/>
                    </div>
                    <div class="d-none 
                        d-md-block 
                        col-11 
                        fw-bold 
                        text-dark" id="cookies-title">
                        ${this.trans("cookies.banner.title")}
                    </div>
                    <div class="d-md-none text-center">
                        <img class="img-fluid" src="${cookie}" alt="home-header"/>
                    </div>
                </div>
                <div class="row m-1">
                    <div class="col-md-8 
                        fw-bolder 
                        text-body
                        mb-3" id="cookies-text">
                        ${this.trans("cookies.banner.text")}
                    </div>
                    <div class="col-md-4 
                        container
                        text-center">
                        <div class="row justify-content-md-center mb-3 pr-5 ">
                            <div class="col-8 position-relative">
                                ${this.createElement(ButtonComponent, {
                                    classList: 'p-3 border border-dark rounded text-dark',
                                    link: '#',
                                    label: this.trans("cookies.banner.personnaliser"),
                                })}
                            </div>
                            <div class="col-4 position-relative">${this.createElement(ButtonComponent, {
                                classList: 'p-3',
                                link: '#',
                                label: this.trans("cookies.banner.accept"),
                                type: Color.DARK
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
