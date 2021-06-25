
import PartnerRequestViewComponent from "App/modules/partner-request/components/partner.request.view.component";
import PartnerRequestService from "App/modules/partner-request/services/partner.request.service";
import Module from "App/modules/shared/types/module.type";

const PartnerRequest = {
    components: [
        PartnerRequestViewComponent
    ],
    services: [
        PartnerRequestService
    ],
    defaultComponent: PartnerRequestViewComponent
} as Module;

export default PartnerRequest;