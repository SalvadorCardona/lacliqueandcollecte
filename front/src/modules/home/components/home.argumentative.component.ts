import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import argument1 from "Media/home/argument1.svg";
import argument2 from "Media/home/argument2.svg";
import argument3 from "Media/home/argument3.svg";

interface content {
    image: string;
    title: string;
    text: string;
    link: string;
    textlink: string;
}

export default class HomeArgumentativeComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-home-argumentative';
    }

    private contentList = [
        {
            image: argument1,
            title: 'artisana local',
            text: 'Trouvez les artisans qui sont proches de chez vous, et profitez de leur savoir-faire. Recherchez vos produits par ville.',
            link: '/a-propos',
            textlink: 'En savoir plus ici...'
        },
        {
            image: argument2,
            title: 'produits d\'exception',
            text: 'Accédez à un catalogue de produits artisanaux de qualité, remplissez votre panier, nous nous occupons du reste.',
            link: '/a-propos',
            textlink: 'En savoir plus ici...'
        },
        {
            image: argument3,
            title: 'partenariat',
            text: 'Zartisana aide les artisans locaux à gagner en visibilité. Découvrez les perles cachées de votre région !',
            link: '/a-propos',
            textlink: 'En savoir plus ici...'
        }
    ] as content[];

    public listRender(element: content, key: number): TemplateResult {
        return html`
            <div class="col-md-4 text-center arg-${key + 1}">
                <span>
                    <img src="${element.image}" alt="args-main">
                </span>
                <h4 class="text-uppercase">${element.title}</h4>
                <hr>
                <p>${element.text}</p>
                <a href="${element.link}"> ${element.textlink} </a>
            </div>
        `;
    }

    public render(): TemplateResult {
        return html`
            <div class="container mt-5">
                <div class="row">
                   ${this.contentList.map((element, key) => this.listRender(element, key))}
                </div>
            </div>
        `;
    }
}
