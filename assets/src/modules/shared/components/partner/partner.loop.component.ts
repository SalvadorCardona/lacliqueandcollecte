import {AppComponent} from "App/types/custom.element";
import {html, property, TemplateResult} from "lit-element";
import {injector} from "App/core/container.service";
import {PartnerType} from "App/types/partner.type";

export default class PartnerLoopComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-loop';
    }

    @property({type: Object})
    private partners: Array<PartnerType>

    public render(): TemplateResult {
        return html`
            <app-partner-card class="col-md-4"></app-partner-card>
            <app-partner-card class="col-md-4"></app-partner-card>
            <app-partner-card class="col-md-4"></app-partner-card>
        `;
    }
}
