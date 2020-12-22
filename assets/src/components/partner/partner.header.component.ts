import {AppHtmlElement, CustomElement} from 'App/components/custom.element';
import {Image, Product} from "App/models/product";

@CustomElement()
export default class PartnerHeaderComponent extends AppHtmlElement {

    static selector = 'app-partner-header';

    static get observedAttributes() { return ['product'];}

    connectedCallback() {

        this.innerHTML = this.render();
    }

    render() {
        return `
        <div id="partner-header" class="app-wrapper d-flex align-items-center flex-column" style="background-image: url('http://localhost:8000/app/uploads/2020/11/atelier.jpg')">
            <div class="background-overlay"></div>
            <img id="picture" src="http://localhost:8000/app/uploads/2020/11/artisant.jpg" alt="face-picture">
            
            
            <div id="last-name" class="text-white">
                Céline
            </div>

            <hr>
            
            <h1>
                La touche de bois            </h1>

            <span>
                <app-icon domain="fas" icon="map-marked-alt"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></app-icon>
                Commerce situé dans la ville de Lyon
            </span>

        </div>
        `;
    }
}

