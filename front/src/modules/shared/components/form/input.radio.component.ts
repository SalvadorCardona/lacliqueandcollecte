import {html, TemplateResult} from 'lit-element';
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";

export default class InputRadioComponent extends InputBaseComponent {
    public static getComponentName(): string {
        return 'app-input-radio';
    }

    public render(): TemplateResult {
        return html`
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${this.getId()}">
                <label class="form-check-label" for="${this.getId()}">
                    ${this.label}
                </label>
            </div>
        `;
    }
}