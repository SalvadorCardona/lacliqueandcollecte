import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from "lit-element";
import HeaderMobileComponent from "App/modules/shared/components/header/header.mobile.component";
import HeaderDesktopComponent from "App/modules/shared/components/header/header.desktop.component";

export default class HeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-header';
    }

    public render(): TemplateResult
    {
        return html`
            ${this.createElement(HeaderMobileComponent, {classList: ' d-block d-md-none'})}
            ${this.createElement(HeaderDesktopComponent, {classList: 'd-none d-md-block'})}
        `;
    }
}

