import {AppComponent} from 'App/types/custom.element';
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
                <div class="parent
                    p-4
                    mb-3
                    d-flex
                    justify-content-center
                    flex-column
                    align-items-center">
                    <img class="logo p-4" src="${getBaseSiteUrl()}/app/uploads/2020/12/logo.svg">
                    <div class="title">
                        <h1 class="text-light text-center">SOUTENEZ LES ARTISANS DE VOTRE REGION !</h1>
                        <h2 class="fs-4
                            text-light
                            text-center
                            fw-normal">Accédez à notre catalogue de produits artisanaux et
                            locaux</h2>
                    </div>
 
                    <div class="div-form-search
                        mt-4
                        border-radius 
                        bg-white 
                        p-2">
                        <form>
                            <div class="form-search
                                position-relative
                                d-flex
                                justify-content-center">
                                    <div class="child-search form-group-speciality ps-2">
                                        <label for="search-box-1" class="fw-bold text-dark">Spécialité</label>
                                        <span>
                                            <input 
                                                class="d-block" 
                                                name="search-box-1" 
                                                type="text"
                                                placeholder="Quel corps de métier?">
                                        </span>
                                    </div>
                                    <div class="child-search form-group-city ps-2">
                                        <label for="search-box-2" class="fw-bold text-dark">Ville</label>
                                        <span>
                                            <input class="d-block" id="city" name="search-box-2" type="text"
                                                   placeholder="Où?">
                                        </span>
                                    </div>
                                    <div type="button" class="
                                        position-absolute
                                        end-0
                                        form-group-btn">
                                        <a class="cta-search
                                            border-radius 
                                            bg-primary 
                                            d-flex 
                                            justify-content-center 
                                            align-items-center">
                                            <app-icon class="" icon="search"></app-icon>
                                        </a>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}