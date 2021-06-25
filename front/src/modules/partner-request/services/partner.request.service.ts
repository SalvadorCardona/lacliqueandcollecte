import Abstract from "App/modules/shared/services/client/abstract.client";
import {environment} from "App/environement/environement";
import {PartnerRequest} from "App/modules/partner-request/types/partner.request";

export default class PartnerRequestService extends Abstract{
    public addPartnerRequest(partnerRequest: PartnerRequest): Promise<Array>
    {
        return this.clientHttp.send('post', environment.apiEndpoints.partnerRequest.create, partnerRequest)
    }
}
