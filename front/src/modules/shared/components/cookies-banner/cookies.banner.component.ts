import {html, TemplateResult} from 'lit-element';
import cookie from "Media/shared/cookie.svg";
import ButtonComponent from "App/modules/shared/components/button.component";
import {AppComponent} from "App/modules/shared/services/custom.element";
import {Color} from "App/modules/shared/enum/color.enum";

interface CookieAcceptance {
    hasAccepted: boolean,
    dateAccepted: Date,
}

export default class CookiesBannerComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-cookies-banner';
    }

    private miliSecondToExpire: number = 30 * 24 * 60 * 60 * 1000;

    public connectedCallback(): void {
        const cookieAcceptance = this.getCookieAcceptance();
        if (cookieAcceptance) {
            const today = new Date().getTime();
            const dateExpiration = new Date();
            dateExpiration.setTime(cookieAcceptance.dateAccepted.getTime() + this.miliSecondToExpire);
            const timeExpiration = dateExpiration.getTime();
            if (today < timeExpiration) {
                this.hide();
                return;
            }
        }
        this.show();
        super.connectedCallback();
    }

    private hide(): void {
        this.hidden = true;
    }

    private show(): void {
        this.hidden = false;
    }

    private getCookieAcceptance(): CookieAcceptance | null {
        const dataCookieAcceptance = JSON.parse(localStorage.getItem(CookiesBannerComponent.getComponentName()));

        if (!dataCookieAcceptance) return null;

        return {
            dateAccepted: new Date(dataCookieAcceptance.dateAccepted),
            hasAccepted: dataCookieAcceptance.hasAccepted
        } as CookieAcceptance;
    }

    private setCookieAcceptance(hasAccepted: boolean): void {

        const cookieAcceptance = {
            dateAccepted: new Date(),
            hasAccepted: hasAccepted
        } as CookieAcceptance;

        localStorage.setItem(CookiesBannerComponent.getComponentName(), JSON.stringify(cookieAcceptance))
    }

    private onAccepted(): void {
        this.setCookieAcceptance(true);
        this.hide();
    }

    private onRefused(): void {
        this.setCookieAcceptance(false);
        this.hide();
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
                        $click: () => this.onRefused()
                    })}
                    ${this.createElement(ButtonComponent, {
                        label: this.trans("cookies.banner.accept"),
                        type: Color.DARK,
                        $click: () => this.onAccepted()
                    })}
                </div>
            </div>
        `;
    }

}
