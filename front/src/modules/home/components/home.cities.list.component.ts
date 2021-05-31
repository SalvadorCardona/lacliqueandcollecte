import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import lyon from "Media/home/cities/lyon.jpg";
import paris from "Media/home/cities/paris.jpg";
import nancy from "Media/home/cities/nancy.jpg";

export default class HomeCitiesListComponent extends AppComponent {

    private baseUrl: string = "city";

    public static getComponentName(): string {
        return 'app-home-cities-list';
    }

    private fakeData = [
        {
            img: nancy,
            labelCity: 'Nancy',
            name: 'nancy',
        },
        {
            img: paris,
            labelCity: 'Paris',
            name: 'paris',
        },
        {
            img: lyon,
            labelCity: 'Lyon',
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
                <h2 class="title-border">Nos villes</h2>
                <div class="row">
                    ${this.fakeData.map(data => this.renderCities(data))}
                </div>
            </div>
        `;
    }

    public renderCities(data): TemplateResult {
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
                   href=${this.getUrl(data.name)}
                   style="background-image: url('${data.img}'); background-size: cover">
                        <span class="fs-5 my-5 d-inline-block">${data.labelCity}</span>
                </a>
                </div>
        `;
    }
}
