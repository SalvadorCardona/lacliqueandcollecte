import {AppComponent} from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";

export default class UiButtonComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-button-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent,
                    {
                        title: this.trans("ui.buttons.title"), classList: 'app-wrapper',
                        body: html`
                            <span class="fw-normal"> 
                        &lt;app-button icon="" label="" type=""&gt &lt;/app-button&gt
                    </span>
                            <hr>
                            ${this.createElement(ButtonComponent, {
                                classList:  'mt-2',
                                icon:  'cartPlus',
                                label: this.trans("ui.button.component.normal.label")
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                icon: 'geoLat',
                                label: this.trans("ui.button.component.primary.label"),
                                type: Color.PRIMARY
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                icon: 'geoLat',
                                type:Color.PRIMARY
                                })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                label: this.trans("ui.button.secondary.label"),
                                type:Color.SECONDARY
                                
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                label: this.trans("ui.button.component.success.label"),
                                type:Color.SUCCESS
                            
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                label: this.trans("ui.button.component.danger.label"),
                                type: Color.DANGER
                            })}
                            ${this.createElement(ButtonComponent, {
                                classList: 'mt-2',
                                label: this.trans("ui.button.component.warning.label"),
                                type:Color.WARNING
                            })}
                            ${this.createElement(ButtonComponent, {classList: 'mt-2',
                                label: this.trans("ui.button.component.info.label"),
                                type:Color.INFO})}
                            ${this.createElement(ButtonComponent, {classList: 'mt-2',
                                label: this.trans("ui.button.component.dark.label"),
                                type:Color.DARK})}
                        `
                    }
            )}
        `;
    }
}
