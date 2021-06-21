import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class PartnerRequestViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-request-view';
    }

    //todo : restyle
    public render(): TemplateResult {
        return html`
            <div class="container mt-5 mb-5 p-5 shadow-lg">
                <h2 class="text-success
                            h1-responsive
                            font-weight-bold
                            text-center my-4">
                    ${this.trans("partner.request.form.title")}
                </h2>
                    <div class="mb-md-0 mb-5">
                        <form id="partner-request-form" name="partner-request-form" action="../services/partner.request.service.ts" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="firstName" class="">${this.trans("partner.request.firstName.label")}</label>
                                        <input type="text" id="firstName" name="firstName" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="lastName" class="">${this.trans("partner.request.lastName.label")}</label>
                                        <input type="text" id="lastName" name="lastName" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <label for="description">${this.trans("partner.request.description.label")}</label>
                                        <textarea type="text" id="description" name="description" rows="2" placeholder="${this.trans("partner.request.description.placeholder")}" class="form-control md-textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label for="email" class="">${this.trans("partner.request.email.label")}</label>
                                        <input type="text" id="email" name="email" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="phone" class="">${this.trans("partner.request.phone.label")}</label>
                                        <input type="text" id="phone" name="phone" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="siretNumber" class="">${this.trans("partner.request.siret.label")}</label>
                                        <input type="text" id="siretNumber" name="siretNumber" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('partner-request-form').submit();">${this.trans("partner.request.send.button")}</a>
                        </div>
                    </div>
            </div>
        `;
    }
}