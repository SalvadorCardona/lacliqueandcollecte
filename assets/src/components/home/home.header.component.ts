import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from 'lit-element';
import {getBaseSiteUrl} from "App/shared/helper";

export default class HomeHeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-header';
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid d-flex justify-content-center align-items-center p-5" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2020/11/atelier.jpg')">
                <div class="parent">
                    <div class="logo"></div>
                    <div class="title">
                        <h1>Mon titre</h1>
                    </div>
                    <div class="form-search"></div>
                </div>
            </div>
        `;
    }
}
