import {AppComponent} from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";
import ButtonComponent from "App/modules/shared/components/button.component";

export default class UiButtonComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-button-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent,
                {
                    title: 'Buttons', classList: 'app-wrapper',
                    body: html`
                        <span class="fw-normal">
                        &lt;app-button icon="" label="" type=""&gt &lt;/app-button&gt
                    </span>
                        <hr>
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            icon: 'cartPlus',
                            label: 'Normal...'
                        })}
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            icon: 'geoLat',
                            label: 'Primary...',
                            type: 'primary'
                        })}
                        ${this.createElement(ButtonComponent, {classList: 'mt-2', icon: 'geoLat', type: 'primary'})}
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            label: 'Secondary...',
                            type: 'secondary'
                        })}
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            label: 'Success...',
                            type: 'success'
                        })}
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            label: 'Danger...',
                            type: 'danger'
                        })}
                        ${this.createElement(ButtonComponent, {
                            classList: 'mt-2',
                            label: 'Warning...',
                            type: 'warning'
                        })}
                        ${this.createElement(ButtonComponent, {classList: 'mt-2', label: 'Info...', type: 'info'})}
                        ${this.createElement(ButtonComponent, {classList: 'mt-2', label: 'Dark...', type: 'dark'})}
                    `
                }
            )}
        `;
    }
}