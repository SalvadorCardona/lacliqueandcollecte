import {AppComponent} from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";

export default class UiTextAroundComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-text-around-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent,
                    {
                        title: this.trans('ui.text.around.title'), classList: 'app-wrapper',
                        body: html`
                            <span class="fw-normal">
                            &lt;span class="text-around bg-primary"&gt &lt;/span&gt
                        </span>
                            <hr>
                            <span class="text-around bg-primary">${this.trans('ui.text.around.primary')}</span>
                            <span class="text-around bg-secondary">${this.trans('ui.text.around.secondary')}</span>
                            <span class="text-around bg-success">${this.trans('ui.text.around.success')}</span>
                            <span class="text-around bg-danger">${this.trans('ui.text.around.danger')}</span>
                            <span class="text-around bg-warning">${this.trans('ui.text.around.warning')}</span>
                            <span class="text-around bg-info">${this.trans('ui.text.around.info')}</span>
                            <span class="text-around bg-dark">${this.trans('ui.text.around.dark')}</span>
                        `
                    })
            }
        `;
    }
}
