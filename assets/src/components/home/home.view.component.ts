import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-view';
    }

    public render(): TemplateResult {
        return html`
            <app-home-header></app-home-header>
            <app-home-argumentative></app-home-argumentative>
            <app-home-other-direction></app-home-other-direction>
            <app-home-product-list></app-home-product-list>
            <app-home-partner-list></app-home-partner-list>
        `;
    }
}
