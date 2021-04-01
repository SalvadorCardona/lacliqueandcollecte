import {AppComponent} from "App/components/custom.element";
import componentView from "App/modules/dev/components/dev/page/components.templates/components.page";
import partnerViews from "App/modules/dev/components/dev/page/partner.page";
import productViews from "App/modules/dev/components/dev/page/product.page";
import {html, property , TemplateResult} from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {injector} from "App/core/container.service";
import {ModalService} from "App/core/modal.service";

export default class DevApplicationComponent extends AppComponent {
    @injector(ModalService)
    private modalService: ModalService;

    private openModal(): void {
        console.log(this)
        let div = document.createElement('div');
        div.innerText = 'test';
        this.modalService.open(div);
    }

    public render(): TemplateResult {
        return html`
            <app-button @click="${this.openModal}" icon="person" type="success"></app-button>
        `;
    }
}
