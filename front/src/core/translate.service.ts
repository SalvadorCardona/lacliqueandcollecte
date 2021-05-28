import {property} from 'lit-element';



export default class TranslateService{

    public translate(text: string, domain: string):string {
         // translation;
        return  "Vous êtes artisan ?";
    }


    @property({type: String})
    private text: string;

    @property({type: String})
    private domain: string;


    }
