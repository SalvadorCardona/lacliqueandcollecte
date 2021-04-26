import HomeViewComponent from "App/modules/home/components/home.view.component";
import HomeHeaderComponent from "App/modules/home/components/home.header.component";
import HomeOtherDirectionComponent from "App/modules/home/components/home.other.direction.component";
import HomePartnerListComponent from "App/modules/home/components/home.partner.list.component";
import HomeArgumentativeComponent from "App/modules/home/components/home.argumentative.component";
import HomeProductListComponent from "App/modules/home/components/home.product.list.component";
import {Module} from "App/types/module.type";

export default {
    components: [
        HomeViewComponent,
        HomeHeaderComponent,
        HomeOtherDirectionComponent,
        HomePartnerListComponent,
        HomeArgumentativeComponent,
        HomeProductListComponent
    ]
} as Module;