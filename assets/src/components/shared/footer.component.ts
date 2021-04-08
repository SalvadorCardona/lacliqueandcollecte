import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from "lit-element";

export default class FooterComponent extends AppComponent{

    public static getComponentName(): string{
        return 'app-footer';
    }

    public render(): TemplateResult {
        return html`
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <ul>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                            <li>Lorem issssum</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}