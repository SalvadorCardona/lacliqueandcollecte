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
                title: 'Text Around', classList: 'app-wrapper',
                body: html`
                        <span class="fw-normal">
                            &lt;span class="text-around bg-primary"&gt &lt;/span&gt
                        </span>
                        <hr>
                        <span class="text-around bg-primary">${this.trans('uiTextAroundPrimary')}</span>
                        <span class="text-around bg-secondary">${this.trans('uiTextAroundSecondary')}</span>
                        <span class="text-around bg-success">${this.trans('uiTextAroundSuccess')}</span>
                        <span class="text-around bg-danger">${this.trans('uiTextAroundDanger')}</span>
                        <span class="text-around bg-warning">${this.trans('uiTextAroundWarning')}</span>
                        <span class="text-around bg-info">${this.trans('uiTextAroundInfo')}</span>
                        <span class="text-around bg-dark">${this.trans('uiTextAroundDark')}</span>
                    `
            })
        }
        `;
    }
}
