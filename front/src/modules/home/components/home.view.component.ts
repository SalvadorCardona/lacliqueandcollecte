import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import HomeHeaderComponent from "App/modules/home/components/home.header.component";
import HomeArgumentativeComponent from "App/modules/home/components/home.argumentative.component";
import HomeOtherDirectionComponent from "App/modules/home/components/home.other.direction.component";
import HomeProductListComponent from "App/modules/home/components/home.product.list.component";
import HomePartnerListComponent from "App/modules/home/components/home.partner.list.component";
import HomeCitiesListComponent from "App/modules/home/components/home.cities.list.component";
import HomeJobsListComponent from "App/modules/home/components/home.jobs.list.component";

export default class HomeViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(HomeHeaderComponent)}
            ${this.createElement(HomeArgumentativeComponent)}
            ${this.createElement(HomeOtherDirectionComponent)}
            ${this.createElement(HomePartnerListComponent)}
            ${this.createElement(HomeProductListComponent)}
            ${this.createElement(HomeCitiesListComponent)}
            ${this.createElement(HomeJobsListComponent)}
        `;
    }
}
