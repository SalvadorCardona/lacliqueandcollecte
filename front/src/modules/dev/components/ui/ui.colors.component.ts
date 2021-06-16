import {AppComponent} from "App/modules/shared/services/custom.element";
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
                            title: this.trans('ui.colors.title'),
                            body: html`
                                <span class="app-color bg-primary">${this.trans('ui.colors.primary')}</span>
                                <span class="app-color bg-secondary">${this.trans('ui.colors.secondary')}</span>
                                <span class="app-color bg-success">${this.trans('ui.colors.success')}</span>
                                <span class="app-color bg-warning">${this.trans('ui.colors.warning')}</span>
                                <span class="app-color bg-danger">${this.trans('ui.colors.danger')}</span>
                                <span class="app-color bg-dark">${this.trans('ui.colors.dark')}</span>
                            `
                        })
                    }
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent,
                        {
                            title: this.trans('ui.gradients.title'),
                            body: html`
                                <span class="app-gradient gradient-primary">${this.trans('ui.colors.primary')}</span>
                                <span class="app-gradient gradient-secondary">${this.trans('ui.colors.secondary')}</span>
                                <span class="app-gradient gradient-success">${this.trans('ui.colors.success')}</span>
                                <span class="app-gradient gradient-warning">${this.trans('ui.colors.warning')}</span>
                                <span class="app-gradient gradient-danger">${this.trans('ui.colors.danger')}</span>
                                <span class="app-gradient gradient-dark">${this.trans('ui.colors.dark')}</span>
                            `
                        })
                    }
                </div>
            </div>
        `;
    }
}
