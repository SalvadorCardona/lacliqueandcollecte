import {AppComponent} from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";
import ButtonComponent from "App/modules/shared/components/button.component";

export default class UiButtonComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-button-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent,
                    {
                        title: this.trans("uiButtonTitle"), classList: this.trans("uiButtonClassList"),
                        body: html`
                            <span class="fw-normal">
                        &lt;app-button icon="" label="" type=""&gt &lt;/app-button&gt
                    </span>
                            <hr>
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentNormalClassList"),
                                icon: this.trans("uiButtonComponentNormalIcon"),
                                label: this.trans("uiButtonComponentNormalLabel")
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentPrimaryClassList"),
                                icon: this.trans("uiButtonComponentPrimaryIcon"),
                                label: this.trans("uiButtonComponentPrimaryLabel"),
                                type:this.trans("uiButtonComponentPrimaryType")
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentGeoLatClassList"),
                                icon: this.trans("uiButtonComponentgeoLatIcon"),
                                type:this.trans("uiButtonComponentGeoLatType")
                                })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentSecondaryClassList"),
                                label: this.trans("uiButtonComponentSecondarylabel"),
                                type:this.trans("uiButtonComponentSecondaryType")
                                
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentSuccessClassList"),
                                label: this.trans("uiButtonComponentSuccesslabel"),
                                type:this.trans("uiButtonComponentSuccessType")
                            
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentDangerClassList"),
                                label: this.trans("uiButtonComponentDangerlabel"),
                                type:this.trans("uiButtonComponentDangerType")
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: this.trans("uiButtonComponentWarningClassList"),
                                label: this.trans("uiButtonComponentWarninglabel"),
                                type:this.trans("uiButtonComponentWarningType")
                            })}
                            ${this.createElement(ButtonComponent, {classList: this.trans("uiButtonComponentInfoClassList"),
                                label: this.trans("uiButtonComponentInfolabel"),
                                type:this.trans("uiButtonComponentInfoType")})}
                            ${this.createElement(ButtonComponent, {classList: this.trans("uiButtonComponentDarkClassList"),
                                label: this.trans("uiButtonComponentDarklabel"),
                                type:this.trans("uiButtonComponentDarkType")})}
                        `
                    }
            )}
        `;
    }
}
