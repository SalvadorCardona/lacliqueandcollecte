import homeTemplateComponent from "App/modules/ui/components/home.component";
import {AppHtmlElement, CustomElement} from "App/components/custom.element";

@CustomElement({
    template: homeTemplateComponent
})
export class HomeComponent extends AppHtmlElement {
    static selector = 'app-home';
}
