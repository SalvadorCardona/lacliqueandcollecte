import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import image1 from "Media/home/other_direction1.jpg";
import image2 from "Media/home/other_direction2.jpg";
import image3 from "Media/home/other_direction3.jpg";
import ButtonComponent from "App/modules/shared/components/button.component";


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
                            ${this.trans("homeOtherDirectionMainTitle")}</h4></div>
                        <div class="h-50">
                            <span>${this.trans("homeOtherDirectionPresentation")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: this.trans("homeOtherDirectionPresentationLink"),
                                        label: this.trans("homeOtherDirectionPresentationLabel"),
                                        type: this.trans("homeOtherDirectionPresentationType")
                                    }
                            )}
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image3}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 class="fw-normal text-dark">
                            ${this.trans("homeOtherDirectionArtisan")}</h4></div>
                        <div class="h-50">
                            <span>${this.trans("homeOtherDirectionBecomePartner")}</span>
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: this.trans("homeOtherDirectionBecomePartnerLink"),
                                        label: this.trans("homeOtherDirectionBecomePartnerLabel"),
                                        type: this.trans("homeOtherDirectionBecomePartnerType")

                                    }
                            )}
                        </div>
                    </div>
                    <div class="with-background col-md-4" style="background-image: url('${image1}')"></div>
                    <div class="without-background col-md-4">
                        <div class="h-50"><h4 id="title-3" class="fw-normal text-dark">
                            ${this.trans("homeOtherDirectionDiscover")}</h4></div>
                        <div class="h-50">
                            ${this.createElement(ButtonComponent,
                                    {
                                        link: this.trans("homeOtherDirectionDiscoverLink"),
                                        label: this.trans("homeOtherDirectionDiscoverLabel"),
                                        type: this.trans("homeOtherDirectionDiscoverType")

                                    }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
