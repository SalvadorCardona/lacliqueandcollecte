import { AppComponent } from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import { html, TemplateResult } from "lit-element";

export default class textAroundComponent extends AppComponent {
    public static getComponentName(): string {
        return 'app-text-around-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="col-4">
                ${this.createElement(WrapperComponent, 
                    {
                        title: 'Text Around', classList: 'app-wrapper',
                        body: html`
                                    <span class="fw-normal">
                                        &lt;span class="text-around bg-primary"&gt &lt;/span&gt
                                    </span>
                                    <hr>
                                    <span class="text-around bg-primary">bg-primary</span>
                                    <span class="text-around bg-secondary">bg-secondary</span>
                                    <span class="text-around bg-success">bg-success</span>
                                    <span class="text-around bg-danger">bg-danger</span>
                                    <span class="text-around bg-warning">bg-warning</span>
                                    <span class="text-around bg-info">bg-info</span>
                                    <span class="text-around bg-dark">bg-dark</span>
                                `
                    })
                }
            </div>
        `;
    }
}