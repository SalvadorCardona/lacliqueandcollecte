    import {AppComponent} from 'App/components/custom.element';
    import {html, TemplateResult} from 'lit-element';
    import {getBaseSiteUrl} from "App/shared/helper";

    export default class HomeHeaderComponent extends AppComponent {

        public static getComponentName(): string {
            return 'app-home-header';
        }

        public render(): TemplateResult {
            return html`


                <div class="container-fluid d-flex justify-content-center align-items-center p-5 position-relative"
                     style="background-image: url('${getBaseSiteUrl()}/app/uploads/2021/04/home_picture.jpg')">
                    <div class="background-overlay"></div>

                    <div class="parent p-4 mb-3">
                        <div id="social-header"
                             class="position-absolute top-0 end-0 translate-middle d-flex justify-content-end">
                            <a class="text-light m-2" href="#">Nos produits</a>
                            <a class="text-light m-2" href="#">Devenir partenaire</a>
                        </div>

                        <img class="logo p-4" src="${getBaseSiteUrl()}/app/uploads/2020/12/logo.svg">
                        <div class="title">
                            <h1 class="text-light text-center">SOUTENEZ LES ARTISANS DE VOTRE REGION !</h1>
                            <h2 class="text-light text-center fw-normal">Accédez à notre catalogue de produits artisanaux et
                                locaux</h2>
                        </div>

                        <div class="div-form-search                                 
                                    d-flex
                                    justify-content-center">
                            
                            <div class="border-radius 
                                        bg-white 
                                        p-1">
                                <form>
                                    <div class="form-search">
                                        <div class="d-flex justify-content-center">

                                            <div class="form-group-speciality ps-2">
                                                <label for="search-box-1" class="fw-bold">Spécialité</label>
                                                <span>
                                        <input class="d-block" name="search-box-1" type="text"
                                               placeholder="Quel corps de métier?">
                                        </span>
                                            </div>
                                            <div class="form-group-city ps-2">
                                                <label for="search-box-2" class="fw-bold">Ville</label>
                                                <span>
                                        <input class="d-block" id="city" name="search-box-2" type="text"
                                               placeholder="Où?">
                                        </span>
                                            </div>
                                            <div class="form-group-btn ">
                                                <a class="  border-radius 
                                                            bg-primary 
                                                            d-flex 
                                                            justify-content-center 
                                                            align-items-center" 
                                                   type="button">
                                                    <app-icon class="" icon="search"></app-icon>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
