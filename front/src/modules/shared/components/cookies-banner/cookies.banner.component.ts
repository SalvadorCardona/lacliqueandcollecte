import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import cookie from "Media/shared/cookie.svg";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";

interface CookieAcceptance {
   hasAccepted: boolean;
   dateAccepted: Date;
}

export default class CookiesBannerComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-cookies-banner';
    }

    private maxDayCookie: number = 30;

    public connectedCallback(): void {

        const cookieAcceptance = this.getCookieAcceptance();
        console.log(cookieAcceptance)
        if (cookieAcceptance) {
            const today = new Date();
            const deltaTime = today.getTime() - cookieAcceptance.dateAccepted.getTime();
            console.log(deltaTime)
            console.log(deltaTime / (24*3600))
            if (deltaTime / (24*3600) < this.maxDayCookie) {
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

    private getCookieAcceptance(): CookieAcceptance|null {
        const dataCookieAcceptance =  JSON.parse(localStorage.getItem(CookiesBannerComponent.getComponentName()));

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
