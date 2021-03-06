import {environment} from "App/environement/environement";
import Abstract from "App/modules/shared/services/client/abstract.client";
import {PartnerPost} from "App/modules/shared/types/partner.type";

export default class PartnerClient extends Abstract {
    public getPartnerById(idPartner: number): Promise<PartnerPost> {
        const partnerEndPoint = environment.apiEndpoints.partner.byId.replace('$id', idPartner.toString());
        return this.clientHttp.send('get', partnerEndPoint)
          .then(response => response.data as PartnerPost);
    }

    public getPartners(): Promise<PartnerPost[]> {
        return this.clientHttp.send('get', environment.apiEndpoints.partner.all)
            .then(response => response.data as PartnerPost[]);
    }
}