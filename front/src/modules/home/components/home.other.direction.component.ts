import {AppComponent} from 'App/modules/shared/services/custom.element';
import {html, TemplateResult} from 'lit-element';
import image1 from "Media/home/other_direction1.jpg";
import image2 from "Media/home/other_direction2.jpg";
import image3 from "Media/home/other_direction3.jpg";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/modules/shared/enum/color.enum";


export default class HomeOtherDirectionComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-other-direction';
    }

    public render(): TemplateResult {
        return html`
            <div class="container-fluid">
                <div class="row">
                    <div class="with-background col-md-4" style="background-image: url('${image2}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 class="fw-normal text-dark">
                            ${this.trans("home.other.direction.main.title")}</h4></div>
                        <div class="h-50">
                            <span>${this.trans("home.other.direction.presentation")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: '/page',
                                        label: this.trans("home.other.direction.presentation.label"),
                                        type: Color.PRIMARY
                                    }
                            )}
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image3}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 class="fw-normal text-dark">
                            ${this.trans("home.other.direction.artisan")}</h4></div>
                        <div class="h-50">
                            <span>${this.trans("home.other.direction.become.partner")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: '/page',
                                        label: this.trans("home.other.direction.become.partner.label"),
                                        type:Color.PRIMARY

                                    }
                            )}
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image1}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 id="title-3" class="fw-normal text-dark">
                            ${this.trans("home.other.direction.discover")}</h4></div>
                        <div class="h-50">
                            ${this.createElement(ButtonComponent,
                                    {
                                        link:'/page',
                                        label: this.trans("home.other.direction.discover.label"),
                                        type: Color.PRIMARY

                                    }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
