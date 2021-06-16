import Module from "App/types/module.type";
import RequestPartnerViewComponent from "App/modules/partner-request/components/request.partner.view.component";

const RequestPartnerModule = {
    components: [
        RequestPartnerViewComponent
    ],
    defaultComponent: RequestPartnerViewComponent
} as Module;

export default RequestPartnerModule;