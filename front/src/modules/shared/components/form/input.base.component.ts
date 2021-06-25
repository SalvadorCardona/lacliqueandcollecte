import {html, property, TemplateResult} from 'lit-element';
import {AppComponent} from "App/modules/shared/services/custom.element";

enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    HIDDEN = 'hidden'
}

export default class InputBaseComponent extends AppComponent {

    @property({type: String})
    protected label: string;

    @property({type: String})
    protected name: string;

    @property({type: String})
    protected type: InputType = InputType.TEXT;

    @property({type: String})
    protected placeholder: string = '';

    @property({type: String})
    protected helper: string;

    @property({type: String})
    protected value: string = '';

    @property({type: Function})
    protected onChange;

    @property({type: Boolean})
    protected required: boolean = false;

    @property({type: String})
    protected error: string = '';

    public get input(): HTMLInputElement {
        return this.querySelector('input')
    }

    public static getComponentName(): string {
        return 'app-input';
    }

    public firstUpdated(): void {
        this.input.required = this.required;
    }

    public render(): TemplateResult {
        return html`
            <div class="form-group">
                <label for="${this.getId()}" class="form-label">${this.label}</label>
                <input 
                        @keyup="${this._onChange}" 
                        @change="${this._onChange}" 
                        value="${this.value}"
                        placeholder="${this.placeholder}" 
                        type="${this.type}" 
                        class="form-control" 
                        id="${this.getId()}">
                ${this.helper ? html`<div class="form-text">${this.helper}</div>` : ''}
                <span class="text-danger">${this.error}</span>
            </div>
        `;
    }

    protected _onChange($e: Event): void {
        if (this.onChange) {
            this.onChange($e)
        }
    }

    protected getId(): string {
        if (!this.name) {
            this.name = Math.random().toString();
        }

        return this.name;
    }
}