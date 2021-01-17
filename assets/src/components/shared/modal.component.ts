import {AppComponent} from 'App/components/custom.element';
import { html } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class ModalComponent extends AppComponent {
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

    private close(e: Event) {
        if(e.target !== e.currentTarget) return;
        this._$close();
    }

    public render() {
        return html`
        <div @click="${this.close}" class="modal-background">
            <div class="modal-content col-md-3 position-relative mt-0">
                <div class="modal-header
                gradient-primary 
                position-absolute 
                top-0 
                start-0
                w-100
                ">
                    <span class="text-uppercase">${this._title || ''}</span>
                    <app-icon @click="${this.close}" icon="biX"></app-icon>
                </div>
                <div class="modal-body">${unsafeHTML(this._body)}</div>
            </div>
        </div>`;
    }
}

