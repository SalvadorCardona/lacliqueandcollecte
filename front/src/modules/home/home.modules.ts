import HomeViewComponent from "App/modules/home/components/home.view.component";
import HomeHeaderComponent from "App/modules/home/components/home.header.component";
import HomeOtherDirectionComponent from "App/modules/home/components/home.other.direction.component";
import HomePartnerListComponent from "App/modules/home/components/home.partner.list.component";
import HomeArgumentativeComponent from "App/modules/home/components/home.argumentative.component";
import HomeProductListComponent from "App/modules/home/components/home.product.list.component";
import HomeCitiesListComponent from "App/modules/home/components/home.cities.list.component";
import HomeCategoriesListComponent from "App/modules/home/components/home.categories.list.component";
import Module from "App/types/module.type";

const HomeModule = {
    components: [
        HomeViewComponent,
        HomeHeaderComponent,
        HomeOtherDirectionComponent,
        HomePartnerListComponent,
        HomeArgumentativeComponent,
        HomeProductListComponent,
        HomeCitiesListComponent,
        HomeCategoriesListComponent,
    ],
    defaultComponent: HomeViewComponent
} as Module;

export default HomeModule;