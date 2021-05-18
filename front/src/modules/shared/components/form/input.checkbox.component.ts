import {html, property, TemplateResult} from 'lit-element';
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";

export default class InputCheckboxComponent extends InputBaseComponent {
    public static getComponentName(): string {
        return 'app-input-checkbox';
    }

    @property({type: Boolean})
    protected checked: boolean = false;

    protected updated(): void {
        this.makeSelected();
    }

    public render(): TemplateResult {
        return html`
            <div class="form-check">
                <input value=${this.value} @change=${this._onChange} class="form-check-input" type="checkbox" id="${this.getId()}">
                <label class="form-check-label" for="${this.getId()}">
                    ${this.label}
                </label>
            </div>
        `;
    }

    private makeSelected(): void {
        this.input.checked = this.checked;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public static create(label: string, value: any,checked: boolean = false, onChange: CallableFunction = null): InputCheckboxComponent {
        const $elem = new InputCheckboxComponent();
        $elem.value = value;
        $elem.label = label;
        $elem.checked = checked;
        $elem.onChange = onChange;

        return $elem;
    }
}