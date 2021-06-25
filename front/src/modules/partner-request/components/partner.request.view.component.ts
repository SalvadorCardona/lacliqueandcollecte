import {AppComponent} from 'App/core/custom.element';
import {html, property, TemplateResult} from 'lit-element';
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/enum/color.enum";
import {injector} from "App/core/container.service";
import ConfigurationService from "App/core/configuration.service";
import PartnerRequestService from "App/modules/partner-request/services/partner.request.service";
import {PartnerRequest} from "App/modules/partner-request/types/partner.request";
import LoaderService from "App/core/loader.service";
import InputSelectComponent from "App/modules/shared/components/form/input.textarea.component";

export default class PartnerRequestViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-request-view';
    }

    @injector(ConfigurationService)
    private configurationService: ConfigurationService;

    @injector(LoaderService)
    private loaderService: LoaderService;

    @injector(PartnerRequestService)
    private partnerRequestService: PartnerRequestService;

    @property({type: Boolean})
    private formInvalid: boolean = false;

    @property({type: Boolean})
    private formSend: boolean = false;

    @property({type: Object})
    private errors: {[key: string]: string} = {};

    private onSendPartnerRequest($event: EventTarget): void {
        this.loaderService.show();
        $event.preventDefault();

        this.formInvalid = false;
        this.errors = {};
        const formInput = this.querySelector('#partner-request-form') as HTMLFormElement

        if (!formInput.checkValidity()) {
            this.formInvalid = true;
            this.loaderService.hide();
            return;
        }

        const data = {
            description: formInput.querySelector('#description').value,
            firstName: formInput.querySelector('#firstName').value,
            lastName: formInput.querySelector('#lastName').value,
            email: formInput.querySelector('#email').value,
            phone: formInput.querySelector('#phone').value,
            siretNumber: formInput.querySelector('#siretNumber').value,
        } as PartnerRequest

        this.partnerRequestService.addPartnerRequest(data)
            .then(() => {
                this.formSend = true;
                this.loaderService.hide();
            }).catch((errors) => {
                this.errors = errors.response.data;
                this.loaderService.hide();
            });
    }

    public render(): TemplateResult {
        if (this.formSend) {
            return html`
            <div class="container mt-3 mb-5 p-5 shadow-lg">
                <h2 class="text-success
                            h1-responsive
                            font-weight-bold
                            text-center my-4">
                    ${this.trans("partner.request.complete.title")}
                </h2>
                <div class="span12 text-center">${this.trans("partner.request.complete.text")}</div>
            </div>
        `;
        }
            return html`
                <div class="container mt-5 mb-5 p-5 shadow-lg">
                    <h2 class="text-success
                            h1-responsive
                            font-weight-bold
                            text-center my-4">
                        ${this.trans("partner.request.form.title")}
                    </h2>
                    <div class="mb-md-0 mb-5">
                        <form @submit=${this.onSendPartnerRequest} id="partner-request-form" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    ${this.createElement(InputBaseComponent, {
                                        type: 'text',
                                        name: 'firstName',
                                        label: this.trans("partner.request.firstName.label"),
                                        required: true,
                                        error: this.getError('firstName')
                                    })}
                                </div>
                                <div class="col-md-6">
                                    ${this.createElement(InputBaseComponent, {
                                        type: 'text',
                                        name: 'lastName',
                                        label: this.trans("partner.request.lastName.label"),
                                        error: this.getError('lastName')
                                    })}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    ${this.createElement(InputSelectComponent, {
                                        name: 'description',
                                        label: this.trans("partner.request.description.label"),
                                        helper: this.trans("partner.request.description.placeholder"),
                                        error: this.getError('description')
                                    })}
                                </div>
                            </div>

                            ${this.renderEmail()}

                            <div class="row">
                                <div class="col-md-6">
                                    ${this.createElement(InputBaseComponent, {
                                        type: 'phone',
                                        name: 'phone',
                                        label: this.trans("partner.request.phone.label"),
                                        error: this.getError('phone')
                                    })}
                                </div>
                                <div class="col-md-6">
                                    ${this.createElement(InputBaseComponent, {
                                        type: 'phone',
                                        name: 'siretNumber',
                                        label: this.trans("partner.request.siret.label"),
                                        error: this.getError('siretNumber')
                                    })}
                                </div>
                            </div>
                            <div class="text-center text-md-left mt-3">
                                ${this.createElement(ButtonComponent, {
                                    isSubmit: true,
                                    type: Color.PRIMARY,
                                    label: this.trans("partner.request.send.button")
                                })}
                            </div>
                        </form>

                        ${this.renderFormInvalid()}

                    </div>
                </div>
            `;
    }

    private renderEmail(): TemplateResult|string {
        const user = this.configurationService.configuration.user;

        return html`
            <div class="${user ? 'd-none' : 'row'}">
                <div class="col-md-12">
                    ${this.createElement(InputBaseComponent, {
                        type: 'email',
                        value: user ? user.email : '',
                        name: 'email',
                        label: this.trans("partner.request.email.label"),
                    })}
                </div>
            </div>
        `;
    }

    private renderFormInvalid(): TemplateResult|string {
        if (!this.formInvalid) {

            return '';}

        return html`<div class="mt-5"><spans class="text-danger">Votre Formulaire n'est pas valide</spans></div>`;
    }

    private getError(errorName: string) : string {
        if (errorName in this.errors) {
            return this.errors[errorName];
        }
    }
}