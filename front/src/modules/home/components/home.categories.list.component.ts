import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import bakery from "Media/home/jobs/bakery.jpg";
import brasserie from "Media/home/jobs/brasserie.jpg";
import woodworking from "Media/home/jobs/woodworking.jpg";

export default class HomeCategoriesListComponent extends AppComponent {

    private baseUrl: string = "job";

    public static getComponentName(): string {
        return 'app-home-categories-list';
    }

    private FakeList = [
        {
            img: bakery,
            labelCategory: 'Boulangerie',
            name: 'boulangerie',
        },
        {
            img: brasserie,
            labelCategory: 'Brasserie',
            name: 'brasserie',
        },
        {
            img: woodworking,
            labelCategory: 'Ébénisterie',
            name: 'ébénisterie',
        },
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
                <h2 class="title-border">Nos spécialités</h2>
                <div class="row row-cols-3 justify-content-center">
                    ${this.FakeList.map(category => this.renderCategories(category))}
                </div>
            </div>
        `;
    }

    //TODO : typage de category
    public renderCategories(category): TemplateResult {
        return html `
            <div class="text-white mt-3">
                <a class="btn
                    btn-primary
                    display-block
                    py-5
                    d-block
                    border-radius
                    background-overlay
                    overflow-hidden"
                   role="button"
                   href=${this.getUrl(category.name)}
                   style="background-image: url('${category.img}'); background-size: cover">
                        <span class="fs-5 my-5 d-inline-block">${category.labelCategory}</span>
                </a>
            </div>
        `;
    }
}