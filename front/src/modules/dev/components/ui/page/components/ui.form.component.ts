import { AppComponent } from "App/core/custom.element";
import ButtonComponent from "App/modules/shared/components/button.component";
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";
import InputSelectComponent from "App/modules/shared/components/form/input.select.component";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import { html, TemplateResult } from "lit-element";

export default class formComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-form-view';
    }

    public render(): TemplateResult {
        return html`
        <div class="col-8">
            
            ${this.createElement(WrapperComponent,
            {
                title: 'Form',
                body: html `
                            <form>
                                ${this.createElement(InputBaseComponent, {type: 'email', label: 'Email Address', helper: 'We\'ll never share your email with anyone else.'})}
                                <br>
                                ${this.createElement(InputBaseComponent, {type: 'password', label: 'Password'})}
                                <br>
                                ${this.createElement(InputCheckboxComponent, {label: 'Check me out'})}
                                <br>
                                ${this.createElement(InputSelectComponent, {label: 'Check me out'})}
                                <br>
                                ${this.createElement(ButtonComponent, {label: 'Submit', type: 'primary'})}
                                ${this.createElement(ButtonComponent, {label: 'Cancel', type: 'dark'})}
                            </form>
                            `
            })
        }
        </div>
        `;
        
    }
    
}
