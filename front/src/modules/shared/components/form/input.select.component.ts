import {html, TemplateResult} from 'lit-element';
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";

/**
 * TODO : Not readu for the moment
 */
export default class InputSelectComponent extends InputBaseComponent {
    public static getComponentName(): string {
        return 'app-input-select';
    }

    public render(): TemplateResult {
        return html`
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label">Your number</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        `;
    }
}
