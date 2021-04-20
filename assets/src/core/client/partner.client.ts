import {environment} from "App/environement/environement";
import Abstract from "App/core/client/abstract.client";
import {PartnerPost} from "App/types/partner.type";

export default class PartnerClient extends Abstract {
    public getPartnerById(idPartner: number): Promise<PartnerPost> {
        const partnerEndPoint = environment.apiEndpoints.partner.byId.replace('$id', idPartner.toString());
        return this.clientHttp.send('get', partnerEndPoint)
          .then(response => response.data as PartnerPost);
    }
}