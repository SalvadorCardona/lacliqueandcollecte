import {AppHtmlElement} from 'App/components/custom.element';

export default class ModalComponent extends AppHtmlElement {
    private _body: HTMLElement;
    private _title: string;
    private _$close: Function;

    public init(body: HTMLElement, title: string = null) {
        this._body = body;
        this._title = title;
    }

    set $close(value: Function) {
        this._$close = value;
    }

    afterRender() {
        if (this._$close) {
            this.querySelector('app-icon').addEventListener('click', () => {
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
            <div class="modal-content col-md-3 position-relative mt-0">
                <div class="modal-header
                gradient-primary 
                position-absolute 
                top-0 
                start-0
                w-100
                ">
                    <span class="text-uppercase">${this._title || ''}</span>
                    <app-icon icon="biX"></app-icon>
                </div>
                <div class="modal-body"></div>
            </div>
        </div>`;
    }
}

