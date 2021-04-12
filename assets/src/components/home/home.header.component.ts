import {AppComponent} from 'App/components/custom.element';
import {html, TemplateResult} from 'lit-element';
import {getBaseSiteUrl} from "App/shared/helper";

export default class HomeHeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-header';
    }

    public render(): TemplateResult {
        return html`


            <div class="container-fluid d-flex justify-content-center align-items-center p-5 position-relative" style="background-image: url('${getBaseSiteUrl()}/app/uploads/2021/04/home_picture.jpg')">
                <div class="background-overlay"></div>
                
                <div class="parent p-4 mb-3">
                    <div id="social-header" class="position-absolute top-0 end-0 translate-middle d-flex justify-content-end">
                        <a class="text-light m-2" href="#">Nos produits</a>
                        <a class="text-light m-2" href="#">Devenir partenaire</a>
                    </div>
                    
                    <img class="logo p-4" src="/app/uploads/2020/11/Logo-CC-e1605804875695.png">
                    <div class="title">
                        <h1 class="text-light">SOUTENEZ LES ARTISANS DE VOTRE REGION !</h1>
                        <h2 class="text-light">Accédez à notre catalogue de produits artisanaux et locaux</h2>
                    </div>
                    
                    <div class="p-4 d-flex justify-content-center">
                    <app-wrapper class="app-wrapper">
                    <form >
                        <div class="form-search p-4">
                            <div class="input-group mb-3">
                                
                                <div class="mb-1">
                                    <label for="searchBox" class="form-label text-black-50">Spécialité</label>
                                    <span>
                                    <input class="form-control" name="searchBox" type="text" placeholder="Quel corps de métier?">
                                    </span>
                                </div>
                                <div class="mb-1">
                                    <label for="searchBox" class="form-label text-black-50">Ville</label>
                                    <span>
                                    <input class="form-control" id="ville" name="searchBox" type="text" placeholder="Où?">
                                    </span>
                                </div>
                                
                                <span>
                                    <button class="btn gradient gradient-primary" type="button">
                                        <app-icon icon="search" > </app-icon>
                                    </button>
                                </span>
                            </div>
                            
                        </div>
                    </form>
                    </app-wrapper>
                    </div>
                </div>
            </div>
        `;
    }
}
