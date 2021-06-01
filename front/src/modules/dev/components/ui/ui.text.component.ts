import {AppComponent} from "App/core/custom.element";
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
                        title: this.trans('uiTextTitleMain'),
                        body: html`
                            <h1>${this.trans('uiTextTitleH1')}</h1>
                            <h2>${this.trans('uiTextTitleH2')}</h2>
                            <h3>${this.trans('uiTextTitleH3')}</h3>
                            <h4>${this.trans('uiTextTitleH4')}</h4>
                            <h5>${this.trans('uiTextTitleH5')}</h5>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title: this.trans('uiTextTitleColors'),
                        body: html`
                            <div class="w-50 d-inline-block">
                                <p class="text-primary">${this.trans('uiTextTextPrimary')}</p>
                                <p class="text-secondary">${this.trans('uiTextTextSecondary')}</p>
                                <p class="text-success">${this.trans('uiTextTextSuccess')}</p>
                                <p class="text-danger">${this.trans('uiTextTextDanger')}</p>
                                <p class="text-warning">${this.trans('uiTextTextWarning')}</p>
                                <p class="text-info">${this.trans('uiTextTextInfo')}</p>
                                <p class="text-light bg-dark">${this.trans('uiTextTextLight')}t</p>
                            </div>
                            <div class="w-30 d-inline-block mx-1">
                                <p class="text-dark">${this.trans('uiTextTextDark')}</p>
                                <p class="text-body">${this.trans('uiTextTextBody')}</p>
                                <p class="text-muted">${this.trans('uiTextTextMuted')}</p>
                                <p class="text-white bg-dark">${this.trans('uiTextTextWhite')}</p>
                                <p class="text-black-50">${this.trans('uiTextTextBlack50')}</p>
                                <p class="text-white-50 bg-dark">${this.trans('uiTextTextWhite50')}</p>
                            </div>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title: this.trans('uiTextTextFontTitle'),
                        body: html`
                            <p class="fw-bold">${this.trans('uiTextFontWeightBold')}</p>
                            <p class="fw-bolder">${this.trans('uiTextFontWeightBolder')}</p>
                            <p class="fw-normal">${this.trans('uiTextFontWeightNormal')}</p>
                            <p class="fst-italic">${this.trans('uiTextFontWeightItalic')}</p>
                        `
                    })}
                </div>
                <div class="col-4">
                    ${this.createElement(WrapperComponent, {
                        title:this.trans('uiTextFontSizeTitle'),
                        body: html`
                            <p class="fs-1 fw-bold">${this.trans('uiTextFontSize1')}</p>
                            <p class="fs-2 fw-bold">${this.trans('uiTextFontSize2')}</p>
                            <p class="fs-3 fw-bold">${this.trans('uiTextFontSize3')}</p>
                            <p class="fs-4 fw-bold">${this.trans('uiTextFontSize4')}</p>
                            <p class="fs-5 fw-bold">${this.trans('uiTextFontSize5')}</p>
                            <p class="fs-6 fw-bold">${this.trans('uiTextFontSize6')}</p>
                        `
                    })}
                </div>
            </div>
        `;
    }
}
