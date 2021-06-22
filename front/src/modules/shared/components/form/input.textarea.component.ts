import {html, TemplateResult} from 'lit-element';
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";

export default class InputTextareaComponent extends InputBaseComponent {
    public static getComponentName(): string {
        return 'app-input-textarea';
    }

    public render(): TemplateResult {
        return html`
            <div class="form-group">
                <label for="${this.getId()}" class="form-label">${this.label}</label>
                <textarea 
                        @keyup="${this._onChange}" 
                        @change="${this._onChange}" 
                        placeholder="${this.placeholder}" 
                        class="form-control" 
                        id="${this.getId()}">${this.value}</textarea>
                ${this.helper ? html`<div class="form-text">${this.helper}</div>` : ''}
                <span class="text-danger">${this.error}</span>
            </div>
        `;
    }
}
