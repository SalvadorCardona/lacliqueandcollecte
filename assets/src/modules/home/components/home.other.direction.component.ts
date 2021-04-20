import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';
import {getBaseSiteUrl} from "App/shared/helper";

export default class HomeOtherDirectionComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-other-direction';
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid">
                <div class="row">
                    <div class="with-background col-md-4" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2021/04/picture-view-1.jpg')">image-1</div>
                    <div class="without-background col-md-4">
                        <div class="h-50"></div>
                        <div class="h-50"></div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2021/04/picture-view-2.jpg')">image-2</div>
                    <div class="without-background col-md-4">
                        <div class="h-50"></div>
                        <div class="h-50"></div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2021/04/picture-view-3.jpg')">image-3</div>
                    <div class="without-background col-md-4">
                        <div class="h-50"></div>
                        <div class="h-50"></div>
                    </div>
                </div>
            </div>
        `;
    }
}
