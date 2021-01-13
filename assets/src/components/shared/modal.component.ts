import {AppHtmlElement, CustomElement} from 'App/components/custom.element';

@CustomElement()
export default class ModalComponent extends AppHtmlElement {
    private _body: any;
    private _$close: Function;

    set body(value: any) {
        this._body = value;
    }

    afterRender() {
        this.querySelector('[data-action="close"]').addEventListener('click', () => {
            this._$close();
        });

        this.querySelector('.modal-body').insertAdjacentElement('beforeend', this._body);
    }

    set $close(value: Function) {
        this._$close = value;
    }

    render(): string {
        return `
        <div class="modal-background">
            <div class="modal-content">
                <div class="modal-header"><span data-action="close">X</span></div>
                <div class="modal-body"></div>
            </div>
        </div>`;
    }
}

