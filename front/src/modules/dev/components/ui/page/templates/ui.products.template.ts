import { icons } from "App/core/icons";
import { AppComponent } from "App/core/custom.element";
import { html, TemplateResult } from "lit-element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";

export default class iconComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-icon-view';
    }

    public render(): TemplateResult {
        return html`
        <div class="col-4">
            ${this.createElement(WrapperComponent,
            {
                title: 'Icons',
                body: html `<span class="fw-normal">
                                    &lt;app-icon icon="" &gt &lt;/app-icon&gt
                                </span>
                                <hr>
                                ${this.iconTemplate()}`
            }
        )}
        </div>
        `;
    }

    private iconTemplate(): string
    {
        let template = '';

        Object.keys(icons).forEach(keyIcon => {
            template += `
            <div class="d-flex justify-content-left align-items-center mb-1">
                <app-icon class="text-around" icon="${keyIcon}"></app-icon>
                <pre class="m-0 ms-2">IconName : ${keyIcon}</pre>
            </div>
        `;
        });

        return template
    }
}