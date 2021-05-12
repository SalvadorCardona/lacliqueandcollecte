import { AppComponent } from "App/core/custom.element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import { html, TemplateResult } from "lit-element";

export default class colorComponent extends AppComponent {
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

    <div class="col-4">
        ${this.createElement(WrapperComponent,
            {
                title: 'Colors',
                body: html `
                            <span class="app-color bg-primary">Primary</span>
                            <span class="app-color bg-secondary">Secondary</span>
                            <span class="app-color bg-success">Success</span>
                            <span class="app-color bg-warning">Warning</span>
                            <span class="app-color bg-danger">Danger</span>
                            <span class="app-color bg-dark">Dark</span>
                            `
            })
        }
    </div>
    <div class="col-4">
        ${this.createElement(WrapperComponent,
            {
                title: 'Gradients',
                body: html `
                            <span class="app-gradient gradient-primary">Primary</span>
                            <span class="app-gradient gradient-secondary">Secondary</span>
                            <span class="app-gradient gradient-success">Success</span>
                            <span class="app-gradient gradient-warning">Warning</span>
                            <span class="app-gradient gradient-danger">Danger</span>
                            <span class="app-gradient gradient-dark">Dark</span>
                            `
            })
        }
    </div>
        `;
    }
}