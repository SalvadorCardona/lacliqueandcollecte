import {AppComponent} from "App/core/custom.element";
import ButtonComponent from "App/modules/shared/components/button.component";
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";
import InputSelectComponent from "App/modules/shared/components/form/input.select.component";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";

export default class UiFormComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-form-view';
    }

    public render(): TemplateResult {
        return html`
                ${this.createElement(WrapperComponent, {
                title: this.trans("uiFormTitle"),
                body: html`
                    <form>
                        ${this.createElement(InputBaseComponent, {
                            type: this.trans("uiFormType"),
                            label: this.trans("uiFormlabel"),
                            helper: this.trans("uiFormHelper")
                        })}
                        <br>
                        ${this.createElement(InputBaseComponent, {type: this.trans("uiFormpasswordType"),
                            label: this.trans("uiFormPasswordlabel")})}
                        <br>
                        ${this.createElement(InputCheckboxComponent, {label:this.trans("uiFormCheckboxlabel")})}
                        <br>
                        ${this.createElement(InputSelectComponent, {label: this.trans("uiFormSelectlabel")})}
                        <br>
                        ${this.createElement(ButtonComponent, {type:this.trans("uiFormButtonSubmitType"),
                            label: this.trans("uiFormButtonSubmitLabel")})}
                        ${this.createElement(ButtonComponent, {type:this.trans("uiFormButtonCancelType"),
                            label: this.trans("uiFormButtonCancelLabel")})}
                    </form>
                `
            })
        }
        `;

    }

}
