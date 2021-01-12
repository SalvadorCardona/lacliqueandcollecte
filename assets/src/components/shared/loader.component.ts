import {AppHtmlElement, CustomElement} from 'App/components/custom.element';

@CustomElement()
export default class LoaderComponent extends AppHtmlElement {
    render(): string {
        return '<div class="donutSpinner"></div>';
    }
}

