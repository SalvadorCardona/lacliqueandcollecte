import Module from "App/types/module.type";
import PartnerRequestViewComponent from "App/modules/partner-request/components/partner.request.view.component";
import PartnerRequestService from "App/modules/partner-request/services/partner.request.service";

export default {
    components: [
        PartnerRequestViewComponent
    ],
    services: [
        PartnerRequestService
    ]
} as Module;