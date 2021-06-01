import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import logo from "Media/shared/logo.svg";
import home from "Media/home/home_picture.jpg";
import IconComponent from "App/modules/shared/components/icon.component";

export default class HomeHeaderComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-header';
    }

    public render(): TemplateResult {
        return html`
            <div style="background-image: url('${home})" class="container-fluid
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

                    <h1 class="text-light text-center text-uppercase">${this.trans("homeHeaderSupportTitle")}</h1>
                    <h2 class="fs-4
                        text-light
                        text-center
                        fw-normal">${this.trans("homeHeaderCatalog")}
                    </h2>

                    <div class="div-form-search
                        mb-4
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
                                    <label for="search-box-1" class="fw-bold text-dark">${this.trans("homeHeaderSpeciality")}</label>
                                    <span>
                                        <input class="d-block"
                                               name="search-box-1"
                                               type="text"
                                               placeholder=${this.trans("homeHeaderSearchSpecialityPlaceHolder")}>
                                    </span>
                                </div>
                                <div class="child-search
                                        form-group-city
                                        ps-2">
                                    <label for="search-box-2" class="fw-bold text-dark">${this.trans("homeHeaderCity")}</label>
                                    <span>
                                        <input class="d-block"
                                               id="city"
                                               name="search-box-2"
                                               type="text"
                                               placeholder=${this.trans("homeHeaderSearchCityPlaceHolder")}>
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
                                        ${this.createElement(IconComponent,
                                            {
                                                icon: this.trans("homeHeaderSearchIcon")
                                            }
                                        )}
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
