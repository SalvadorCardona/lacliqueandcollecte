import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class PartnerRequestViewComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-request-view';
    }

    public render(): TemplateResult {
        return html`
            <div class="container p-5">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Formulaire partenaire</h2>
                    <div class="mb-md-0 mb-5">
                        <form id="partner-request-form" name="partner-request-form" action="../services/partner.request.service.ts" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="firstName" class="">Prénom</label>
                                        <input type="text" id="firstName" name="firstName" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="lastName" class="">Nom</label>
                                        <input type="text" id="lastName" name="lastName" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <label for="description">Description de l'entreprise</label>
                                        <textarea type="text" id="description" name="description" rows="2" placeholder="le secteur d'activités / les différents produits / la ville" class="form-control md-textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label for="email" class="">Email</label>
                                        <input type="text" id="email" name="email" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="phone" class="">Numéro de téléphone</label>
                                        <input type="text" id="phone" name="phone" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="siretNumber" class="">Numéro de siret</label>
                                        <input type="text" id="siretNumber" name="siretNumber" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('partner-request-form').submit();">Envoyer</a>
                        </div>
                    </div>
            </div>
        `;
    }
}