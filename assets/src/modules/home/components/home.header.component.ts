import {AppComponent} from 'App/types/custom.element';
import {html, TemplateResult} from 'lit-element';
import logo from "Media/shared/logo.svg";
import home from "Media/home/home_picture.jpg";

export default class HomeHeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-header';
    }

    public render(): TemplateResult {
        return html`
            <div style="background-image: url('${home}" class="container-fluid
                background-overlay
                d-flex
                justify-content-center
                align-items-center
                p-5
                position-relative">
                <div class="parent
                    p-4
                    mb-3
                    d-flex
                    justify-content-center
                    flex-column
                    align-items-center">
                    <img class="logo p-4" src="${logo}" alt="home-header">

                    <h1 class="text-light text-center text-uppercase">soutenez les artisans de votre région !</h1>
                    <h2 class="fs-4
                        text-light
                        text-center
                        fw-normal">
                        Accédez à notre catalogue de produits artisanaux et locaux
                    </h2>

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
                                        <input class="d-block"
                                               name="search-box-1"
                                               type="text"
                                               placeholder="Quel corps de métier?">
                                    </span>
                                </div>
                                <div class="child-search
                                        form-group-city
                                        ps-2">
                                    <label for="search-box-2" class="fw-bold text-dark">Ville</label>
                                    <span>
                                        <input class="d-block"
                                               id="city"
                                               name="search-box-2"
                                               type="text"
                                               placeholder="Où?">
                                    </span>
                                </div>
                                <div type="button" class="position-absolute
                                        end-0
                                        form-group-btn">
                                    <a class="cta-search
                                            border-radius 
                                            bg-primary 
                                            d-flex 
                                            justify-content-center 
                                            align-items-center">
                                        <app-icon icon="search"></app-icon>
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
