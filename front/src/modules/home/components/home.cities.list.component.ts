import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import lyon from "Media/home/cities/lyon.jpg";
import paris from "Media/home/cities/paris.jpg";
import nancy from "Media/home/cities/nancy.jpg";

interface City {
    img: string;
    labelCity: string;
    name: string;
}

export default class HomeCitiesListComponent extends AppComponent {

    private baseUrl: string = "city";

    public static getComponentName(): string {
        return 'app-home-cities-list';
    }

    private citiesList: Array<City> = [
        {
            img: nancy,
            labelCity: this.trans('home.cities.label.nancy'),
            name: 'nancy',
        },
        {
            img: paris,
            labelCity: this.trans('home.cities.label.paris'),
            name: 'paris',
        },
        {
            img: lyon,
            labelCity: this.trans('home.cities.label.lyon'),
            name: 'lyon',
        }
    ];

    private getUrl(name: string): string
    {
        return this.baseUrl + '/' + name;
    }

    public render(): TemplateResult {
        return html`
            <div class="container
                p-5
                text-center">
                <h2 class="title-border">${this.trans('home.cities.title')}</h2>
                <div class="row">
                    ${this.citiesList.map(data => this.renderCities(data))}
                </div>
            </div>
        `;
    }

    public renderCities(city: City): TemplateResult {
        return html `
            <div class="col-md-4 text-white mt-3">
                <a class="btn
                    btn-primary
                    display-block
                    py-5
                    d-block
                    border-radius
                    background-overlay
                    overflow-hidden"
                   role="button"
                   href=${this.getUrl(city.name)}
                   style="background-image: url('${city.img}'); background-size: cover">
                        <span class="fs-5 my-5 d-inline-block">${city.labelCity}</span>
                </a>
                </div>
        `;
    }
}
