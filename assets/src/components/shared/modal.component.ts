import {AppHtmlElement, CustomElement} from 'App/components/custom.element';

@CustomElement()
export default class ModalComponent extends AppHtmlElement {
    private _body: any;
    private _$close: Function;

    set body(value: any) {
        this._body = value;
    }

    set $close(value: Function) {
        this._$close = value;
    }

    afterRender() {
        if (this._$close) {
            this.querySelector('app-button').addEventListener('click', () => {
                this._$close();
            });

            this.querySelector('.modal-background').addEventListener('click', (e) => {
                if(e.target !== e.currentTarget) return;
                this._$close();
            });
        }

        this.querySelector('.modal-body').append(this._body);
    }

    render(): string {
        return `
        <div class="modal-background">
            <div class="modal-content">
                <div class="modal-header"><app-button label="X"></app-button></div>
                <div class="modal-body"></div>
            </div>
        </div>`;
    }
}

