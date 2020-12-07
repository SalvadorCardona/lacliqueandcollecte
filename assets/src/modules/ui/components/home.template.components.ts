import homeTemplateComponent from "App/modules/ui/components/home.component";
import {CustomElement} from "App/components/custom.element";

@CustomElement({
    selector: 'app-home',
    template: homeTemplateComponent
})
export class HomeComponent extends HTMLElement {
}
