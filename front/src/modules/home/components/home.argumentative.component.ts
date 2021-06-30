import {AppComponent} from 'App/modules/shared/services/custom.element';
import {html, TemplateResult} from 'lit-element';
import argument1 from "Media/home/argument1.svg";
import argument2 from "Media/home/argument2.svg";
import argument3 from "Media/home/argument3.svg";
import ButtonComponent from "App/modules/shared/components/button.component";
import {Color} from "App/modules/shared/enum/color.enum";

interface content {
    image: string;
    title: string;
    text: string;
    button: ButtonComponent;
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
            button: this.createElement(ButtonComponent, {
                classList: 'mt-2',
                label: this.trans("home.argumentative.text.link.arg1"),
                link: '/a-propos',
                type: Color.WARNING
            })
        },
        {
            image: argument2,
            title: this.trans("home.argumentative.title.arg2"),
            text: this.trans("home.argumentative.content.arg2"),
            button: this.createElement(ButtonComponent, {
                classList: 'mt-2',
                label: this.trans("home.argumentative.text.link.arg2"),
                link: '/a-propos',
                type: Color.SUCCESS
            })
        },
        {
            image: argument3,
            title: this.trans("home.argumentative.title.arg3"),
            text: this.trans("home.argumentative.content.arg3"),
            button: this.createElement(ButtonComponent, {
                classList: 'mt-2',
                label: this.trans("home.argumentative.text.link.arg3"),
                link: '/a-propos',
                type: Color.SECONDARY
            })
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
                ${element.button}

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
