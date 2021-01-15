import {AppHtmlElement} from 'App/components/custom.element';

export default class PartnerHeaderComponent extends AppHtmlElement {

    static get observedAttributes() { return ['product'];}

    renderSocialIcon(): string {

        return `
            
        `;
    }

    render() {
        return `
        <div id="partner-header" class="app-wrapper d-flex align-items-center flex-column position-relative" style="background-image: url('http://localhost:8000/app/uploads/2020/11/atelier.jpg')">
            <div class="background-overlay"></div>
            <img id="picture" src="http://localhost:8000/app/uploads/2020/11/artisant.jpg" alt="face-picture">
            
            
            <div id="last-name" class="text-white">
                Céline
            </div>

            <hr>
            
            <h1>
                La touche de bois            </h1>

            <span>
                <app-icon icon="geoLat"></app-icon>
                Commerce situé dans la ville de Lyon
            </span>
            
            <div id="social-header" class="position-absolute bottom-0 end-0  translate-middle d-flex justify-content-end">
                <a href=""><app-icon class="m-2" icon="facebook"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="instagram"></app-icon></a>
                <a href=""><app-icon class="m-2" icon="twitter"></app-icon></a>
            </div>
        </div>
        `;
    }
}

