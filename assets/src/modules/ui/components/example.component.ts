import {html, property, queryAll } from "lit-element";
import {AppComponent} from "App/components/custom.element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export class ExampleComponent extends AppComponent {
    @property({type: String})
    name = 'World';
    @queryAll('div')
    _divs;

    @property()
    greeting = 'Hello';

    @property({attribute: false})
    data = {name: 'Cora'};

    @property({type: Array})
    items = [1, 2, 3];

    html = '<p>test</p>';

    _handleClick(e) {
        console.log(e, this.items);
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }
    public updated() {
        alert('')
    }
    firstUpdated() {

    }
    render() {

        return html`
            <span>${unsafeHTML(this.html)}</span>
            <div id="first"></div>
            <div id="second"></div>
      <h1>Hello, ${this.name}!</h1>
            <p>${this.greeting} ${this.data.name}.</p>
            <p>You have ${this.items.length} items.</p>
      <button @click=${this._handleClick}>
        Click Count: ${this.greeting}
      </button>
      <slot></slot>
    `;
    }
}