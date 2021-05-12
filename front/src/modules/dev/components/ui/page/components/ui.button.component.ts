import { AppComponent } from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import { html, TemplateResult } from "lit-element";

export default class buttonComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-button-view';
    }

    public render(): TemplateResult {
        return html`
        <div class="col-4">
            
            ${this.createElement(WrapperComponent, 
                {
                    title: 'Buttons',
                    classList: '[app-wrapper]',
                    body: html `<span class="fw-normal">
                                    &lt;app-button icon="" label="" type=""&gt &lt;/app-button&gt
                                </span>
                                <hr>
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', icon: 'cartPlus', label: 'Normal...'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', icon: 'geoLat', label: 'Primary...', type: 'primary'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', icon: 'geoLat', type: 'primary'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Secondary...', type: 'secondary'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Success...', type: 'success'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Danger...', type: 'danger'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Warning...', type: 'warning'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Info...', type: 'info'})}
                                ${this.createElement(buttonComponent, {classList : '[mt-2]', label: 'Dark...', type: 'dark'})}                               
                                `
                }
                )}

        </div>
        `;
    }
}