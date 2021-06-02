import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from "lit-element";

export default class HeaderMobileComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-header-mobile';
    }

    public render(): TemplateResult
    {
        return html`
            <div class="m-5 p-5">Hello Responsive</div>
        `;
    }
}

