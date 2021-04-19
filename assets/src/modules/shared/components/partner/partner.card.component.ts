import {AppComponent} from 'App/types/custom.element';
import {property} from 'lit-element/lib/decorators';
import {html , TemplateResult} from 'lit-element';
import {PartnerType} from "App/types/partner.type";

export default class PartnerCardComponent extends AppComponent {

    public static getComponentName(): string {
        return 'app-partner-card';
    }

    private partnerFixture = '{"lastName":"C\u00e9line","firstName":"Duchamp","facePicture":"118","shopName":"La touche de bois","shopDescription":"La touche de bois est un atelier ind\u00e9pendant depuis 2007 sp\u00e9cialis\u00e9 dans le travail de bois. C\u00e9line la g\u00e9rante de l\'atelier \u00e0 parcouru plusieurs pays et travaill\u00e9 dans de nombreux coin dans le monde avant d\'ouvrir son atelier. Aujourd\'hui avec son \u00e9quipe, elle sera des objets pour d\u00e9corer les pi\u00e8ces de votre maison....","shopPicture":"117","email":"hebustha@gmail.com","phone":"0782194428","city":"lyon","street":"10 rue de la marini\u00e8re","cityCode":"69003","facebook":"http:\\/\\/facebook.com","twitter":"http:\\/\\/twitter.com","linkedin":"http:\\/\\/twitter.com","tiktok":"http:\\/\\/twitter.com"}';

    @property({type: Object})
    private partner: PartnerType;

    protected firstUpdated(): void {
        this.partner = JSON.parse(this.partnerFixture);
        console.log(this.partner)
    }

    public render(): TemplateResult {
        return html`
            <div class="border-radius">
                
            </div>
        `;
    }

}

