import {AppHtmlElement} from 'App/components/custom.element';

export default class LoaderComponent extends AppHtmlElement {
    render(): string {
        return '<div class="donutSpinner"></div>';
    }
}

