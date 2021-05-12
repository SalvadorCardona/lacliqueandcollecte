import {AppComponent} from 'App/core/custom.element';
import {html, property, TemplateResult} from 'lit-element';
import IconComponent from "App/modules/shared/components/icon.component";

export default class ModalComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-modal';
    }

    @property({type: HTMLElement})
    private _body: HTMLElement;

    private _title: string;

    private _$close: () => void;

    public init(body: HTMLElement, title: string = null): void {
        this._body = body;
        this._title = title;
    }

    public set $close(value: () => void) {
        this._$close = value;
    }

    private close(e: Event): void {
        if(e.target !== e.currentTarget) return;
        this._$close();
    }

    public render(): TemplateResult {
        return html`
        <div @click=${this.close} class="modal-background">
            <div class="modal-content col-md-3 position-relative mt-0">
                <div class="modal-header
                gradient-primary 
                position-absolute 
                top-0 
                start-0
                w-100
                ">
                    <span class="text-uppercase">${this._title || ''}</span>
                    ${this.createElement(IconComponent, {$click: () => this._$close(), icon: 'biX'})}
                </div>
                <div class="modal-body">${this._body}</div>
            </div>
        </div>`;
    }
}

