import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {PartnerType} from "App/types/partner.type";

export default class PartnerClient extends Abstract {
    public getPartnerById(idPartner: number): Promise<PartnerType> {
        const partnerEndPoint = environment.apiEndpoints.partner.byId.replace('$id', idPartner.toString());
        return this.clientHttp.send('get', partnerEndPoint)
          .then(response => response.data as PartnerType);
    }
}