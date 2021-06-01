import {AppComponent} from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";

export default class UiColorsComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-colors-view';
    }

    public render(): TemplateResult {
        return html`
            <style>
                .app-color {
                    padding: 15px;
                    border-radius: 15px;
                    color: white;
                    display: inline-block;
                    margin: 3px;
                }

                .app-gradient {
                    display: block;
                    width: 90%;
                    margin: 15px;
                    border-radius: 15px;
                    text-align: center;
                    color: white;
                    padding: 15px;
                }
            </style>
            <div class="row">
                <div class="col-4">
                    ${this.createElement(WrapperComponent,
                        {
                            title: this.trans('uiColorsTitle'),
                            body: html`
                                <span class="app-color bg-primary">${this.trans('uiColorsPrimary')}</span>
                                <span class="app-color bg-secondary">${this.trans('uiColorsSecondary')}</span>
                                <span class="app-color bg-success">${this.trans('uiColorsSuccess')}</span>
                                <span class="app-color bg-warning">${this.trans('uiColorsWarning')}</span>
                                <span class="app-color bg-danger">${this.trans('uiColorsDanger')}</span>
                                <span class="app-color bg-dark">${this.trans('uiColorsDark')}</span>
                            `
                        })
                    }
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent,
                        {
                            title: this.trans('uiGradientsTitle'),
                            body: html`
                                <span class="app-gradient gradient-primary">${this.trans('uiColorsPrimary')}</span>
                                <span class="app-gradient gradient-secondary">${this.trans('uiColorsSecondary')}</span>
                                <span class="app-gradient gradient-success">${this.trans('uiColorsSuccess')}</span>
                                <span class="app-gradient gradient-warning">${this.trans('uiColorsWarning')}</span>
                                <span class="app-gradient gradient-danger">${this.trans('uiColorsDanger')}</span>
                                <span class="app-gradient gradient-dark">${this.trans('uiColorsDark')}</span>
                            `
                        })
                    }
                </div>
            </div>
        `;
    }
}
