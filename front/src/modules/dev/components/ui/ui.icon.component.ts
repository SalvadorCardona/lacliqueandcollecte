import {icons} from "App/core/icons";
import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";

export default class UiIconComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-icon-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent, {
                        title: 'Icons',
                        body: html`
                            <span class="fw-normal">
                    &lt;app-icon icon="" &gt &lt;/app-icon&gt
                </span>
                            <hr>
                            ${this.iconTemplate()}`
                    }
            )}
        `;
    }

    private iconTemplate(): TemplateResult[] {
        return Object.keys(icons).map(icon => {
            return html`
                <div class="d-flex justify-content-left align-items-center mb-1">
                    <app-icon class="text-around" icon="${icon}"></app-icon>
                    <pre class="m-0 ms-2">${this.trans("uiIconIconName")}${icon}</pre>
                </div>
            `;
        });
    }
}
