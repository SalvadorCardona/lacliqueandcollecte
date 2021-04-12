import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from "lit-element";
import image from "Media/pattern-footer.svg";

export default class FooterComponent extends AppComponent{

    public static getComponentName(): string{
        return 'app-footer';
    }

    public connectedCallback() {
        super.connectedCallback();
        this.style.backgroundImage = `url(${image})`;
        this.classList.add('container-fluid', 'd-block', 'p-5');
    }

    public render(): TemplateResult {
        return html`
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
        `;
    }
}