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
            <div class="m-5
                 row 
                 row-cols-md-3">
                <div class="text-white mt-3 ">
                    <div class="other-dir 
                    py-5
                    d-block
                    border-radius
                    background-overlay
                    overflow-hidden"
                         style="background-image: url('${image2}');">
                        <div class="h-50">
                            <h4 class="fw-bold text-light">${this.trans("home.other.direction.artisan")}</h4>
                        </div>
                        <div class="h-50">
                            <span class="text-light fs-5">${this.trans("home.other.direction.become.partner")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: '/page',
                                        label: this.trans("home.other.direction.become.partner.label"),
                                        type: Color.PRIMARY
                                    }
                            )}
                        </div>
                    </div>
                </div>
                <div class="text-white mt-3">
                    <div class=" other-dir
                    py-5
                    d-block
                    border-radius
                    background-overlay
                    overflow-hidden"
                         style="background-image: url('${image1}'); ">
                        <div class="h-50">
                            <h4 class="fw-bold text-light">${this.trans("home.other.direction.main.title")}</h4>
                        </div>
                        <div class="h-50">
                            <span class="text-light fs-5">${this.trans("home.other.direction.presentation")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: '/page',
                                        label: this.trans("home.other.direction.presentation.label"),
                                        type: Color.PRIMARY
                                    }
                            )}
                        </div>
                    </div>
                </div>
                <div class="text-white mt-3">
                    <div class="
                    other-dir 
                    py-5
                    d-block
                    border-radius
                    background-overlay
                    overflow-hidden"
                         style="background-image: url('${image3}'); ">
                        <div class="h-50">
                            <h4 id="title-3" class="fw-bold text-light">
                                ${this.trans("home.other.direction.discover")}</h4>
                        </div>
                        <div class="h-50">
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: '/page',
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
