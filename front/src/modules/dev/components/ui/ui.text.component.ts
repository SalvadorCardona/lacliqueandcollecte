import {AppComponent} from "App/modules/shared/services/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {html, TemplateResult} from "lit-element";

export default class UiTextComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-text-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="row">
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title: this.trans('ui.text.title.main'),
                        body: html`
                            <h1>${this.trans('ui.text.title.h1')}</h1>
                            <h2>${this.trans('ui.text.title.h2')}</h2>
                            <h3>${this.trans('ui.text.title.h3')}</h3>
                            <h4>${this.trans('ui.text.title.h4')}</h4>
                            <h5>${this.trans('ui.text.title.h5')}</h5>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title: this.trans('ui.text.title.colors'),
                        body: html`
                            <div class="w-50 d-inline-block">
                                <p class="text-primary">${this.trans('ui.text.text.primary')}</p>
                                <p class="text-secondary">${this.trans('ui.text.text.secondary')}</p>
                                <p class="text-success">${this.trans('ui.text.text.success')}</p>
                                <p class="text-danger">${this.trans('ui.text.text.danger')}</p>
                                <p class="text-warning">${this.trans('ui.text.text.warning')}</p>
                                <p class="text-info">${this.trans('ui.text.text.info')}</p>
                                <p class="text-light bg-dark">${this.trans('ui.text.text.light')}t</p>
                            </div>
                            <div class="w-30 d-inline-block mx-1">
                                <p class="text-dark">${this.trans('ui.text.text.dark')}</p>
                                <p class="text-body">${this.trans('ui.text.text.body')}</p>
                                <p class="text-muted">${this.trans('ui.text.text.muted')}</p>
                                <p class="text-white bg-dark">${this.trans('ui.text.text.white')}</p>
                                <p class="text-black-50">${this.trans('ui.text.text.black50')}</p>
                                <p class="text-white-50 bg-dark">${this.trans('ui.text.text.white50')}</p>
                            </div>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title: this.trans('ui.text.text.font.title'),
                        body: html`
                            <p class="fw-bold">${this.trans('ui.text.font.weight.bold')}</p>
                            <p class="fw-bolder">${this.trans('ui.text.font.weight.bolder')}</p>
                            <p class="fw-normal">${this.trans('ui.text.font.weight.normal')}</p>
                            <p class="fst-italic">${this.trans('ui.text.font.weight.italic')}</p>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title:this.trans('ui.text.font.size.title'),
                        body: html`
                            <p class="fs-1 fw-bold">${this.trans('ui.text.font.size1')}</p>
                            <p class="fs-2 fw-bold">${this.trans('ui.text.font.size2')}</p>
                            <p class="fs-3 fw-bold">${this.trans('ui.text.font.size3')}</p>
                            <p class="fs-4 fw-bold">${this.trans('ui.text.font.size4')}</p>
                            <p class="fs-5 fw-bold">${this.trans('ui.text.font.size5')}</p>
                            <p class="fs-6 fw-bold">${this.trans('ui.text.font.size6')}</p>
                        `
                    })}
                </div>
            </div>
        `;
    }
}
