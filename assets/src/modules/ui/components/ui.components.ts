import homeTemplateComponent from "App/modules/ui/components/ui.template";
import {AppHtmlElement, CustomElement} from "App/components/custom.element";

@CustomElement()
export default class UiComponent extends AppHtmlElement {
    static selector = 'app-home';

    connectedCallback() {
        this.innerHTML = homeTemplateComponent;
    }
}
