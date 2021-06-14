import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import bakery from "Media/home/jobs/bakery.jpg";
import brasserie from "Media/home/jobs/brasserie.jpg";
import woodworking from "Media/home/jobs/woodworking.jpg";

export default class HomeJobsListComponent extends AppComponent {

    private baseUrl: string = "job";

    public static getComponentName(): string {
        return 'app-home-jobs-list';
    }

    private FakeList = [
        {
            img: bakery,
            labelJob: 'Boulangerie',
            name: 'boulangerie',
        },
        {
            img: brasserie,
            labelJob: 'Brasserie',
            name: 'brasserie',
        },
        {
            img: woodworking,
            labelJob: 'Ébénisterie',
            name: 'ébénisterie',
        },
        {
            img: woodworking,
            labelJob: 'Test',
            name: 'test',
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
                <h2 class="title-border">Nos spécialités</h2>
                <div class="row row-cols-3">
                    ${this.FakeList.map(data => this.renderJobs(data))}
                </div>
            </div>
        `;
    }

    public renderJobs(data): TemplateResult {
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
                        <span class="fs-5 my-5 d-inline-block">${data.labelJob}</span>
                </a>
                </div>
        `;
    }
}