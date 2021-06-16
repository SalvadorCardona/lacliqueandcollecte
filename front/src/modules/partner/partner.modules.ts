import Module from "App/types/module.type";
import PartnerViewComponent from "App/modules/partner/components/partner.view.component";
import PartnerHeaderComponent from "App/modules/partner/components/partner.header.component";

const PartnerModule = {
    components: [
        PartnerViewComponent,
        PartnerHeaderComponent
    ],
    defaultComponent: PartnerViewComponent
} as Module;

export default PartnerModule;