import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';

export default class HomeCitiesListComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-cities-list';
    }

    private fakeData = [
        {
            img: 'test',
            nameCiTy: 'Nancy',
            url: 'Nancyfake',
        },
        {
            img: 'test',
            nameCiTy: 'Paris',
            url: 'Nancyfake',
        },
        {
            img: 'test',
            nameCiTy: 'Lyon',
            url: 'Nancyfake',
        }
    ];

    public render(): TemplateResult {
        return html`
            <div class="container
                mt-5
                p-5
                text-center">
                <h2 class="title-border">Nos villes</h2>
                
                ${this.fakeData.map(data => this.renderCities(data))}
            </div>
        `;
    }

    public renderCities(data): TemplateResult {
        return html `
            <div class="col-md-4" style="background-image: url('mon-image.jpg'); background-size: cover">
                ${data.nameCiTy}
            </div>
        `;
    }
}
