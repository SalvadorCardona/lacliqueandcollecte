import {AppComponent} from 'App/core/custom.element';
import {html, TemplateResult} from 'lit-element';
import argument1 from "Media/home/argument1.svg";
import argument2 from "Media/home/argument2.svg";
import argument3 from "Media/home/argument3.svg";
import {injector} from "App/core/container.service";
import TranslateService from "App/core/translate.service";

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
            title: this.trans("home.argumentative.title.arg1"),
            text: this.trans("home.argumentative.content.arg1"),
            link: '/a-propos',
            textlink: this.trans("home.argumentative.text.link.arg1")
        },
        {
            image: argument2,
            title: this.trans("home.argumentative.title.arg2"),
            text:this.trans("home.argumentative.content.arg2"),
            link:'/a-propos',
            textlink:this.trans("home.argumentative.text.link.arg2")
        },
        {
            image: argument3,
            title: this.trans("home.argumentative.title.arg3"),
            text: this.trans("home.argumentative.content.arg3"),
            link: '/a-propos',
            textlink: this.trans("home.argumentative.text.link.arg3")
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
            <div class="container p-5">
                <div class="row">
                   ${this.contentList.map((element, key) => this.listRender(element, key))}
                </div>
            </div>
        `;
    }
}
