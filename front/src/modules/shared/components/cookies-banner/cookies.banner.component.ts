import {AppComponent} from 'App/core/custom.element';
import {css, CSSResult, html, TemplateResult, unsafeCSS} from "lit-element";
import image from "Media/shared/cookie.svg";



export default class FooterComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-cookies-banner';
    }

    public render(): TemplateResult {
        return html`
        <div class="container" ${this.trans("cookies.banner.test")}
        
        
        `;}
}
