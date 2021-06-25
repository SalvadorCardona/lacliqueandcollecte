import {AppComponent} from "App/modules/shared/services/custom.element";
import ButtonComponent from "App/modules/shared/components/button.component";
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";
import InputSelectComponent from "App/modules/shared/components/form/input.select.component";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";
import {Color} from "App/modules/shared/enum/color.enum";

export default class UiFormComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-form-view';
    }

    public render(): TemplateResult {
        return html`
                ${this.createElement(WrapperComponent, {
                title: this.trans("ui.form.title"),
                body: html`
                    <form>
                        ${this.createElement(InputBaseComponent, {
                            type: 'email',
                            label: this.trans("ui.form.label"),
                            helper: this.trans("ui.form.helper")
                        })}
                        <br>
                        ${this.createElement(InputBaseComponent, {type: 'password',
                            label: this.trans("ui.form.password.label")})}
                        <br>
                        ${this.createElement(InputCheckboxComponent, {label:this.trans("ui.form.checkbox.label")})}
                        <br>
                        ${this.createElement(InputSelectComponent, {label: this.trans("ui.form.select.label")})}
                        <br>
                        ${this.createElement(ButtonComponent, {type:Color.PRIMARY,
                            label: this.trans("ui.form.button.submit.label")})}
                        ${this.createElement(ButtonComponent, {type:Color.DARK,
                            label: this.trans("ui.form.button.cancel.label")})}
                    </form>
                `
            })
        }
        `;

    }

}
