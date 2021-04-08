import IconComponent from "App/components/shared/icon.component";
import ProductCardComponent from "App/components/product/product.card.component";
import ProductLoopComponent from "App/components/product/product.loop.component";
import ButtonComponent from "App/components/shared/button.component";
import HeaderComponent from "App/components/shared/header/header.component";
import PartnerHeaderComponent from "App/components/partner/partner.header.component";
import ProductViewComponent from "App/components/product/product.view.component";
import HeaderCartComponent from "App/components/shared/header/header.cart.component";
import LoaderComponent from "App/components/shared/loader.component";
import ModalComponent from "App/components/shared/modal.component";
import ModalProductComponent from "App/components/shared/modal.product.component";
import ModalCartComponent from "App/components/shared/modal.cart.component";
import WrapperComponent from "App/components/shared/wrapper.component";
import PartnerViewComponent from "App/components/partner/partner.view.component";
import devComponent from "App/modules/dev/components";
import FooterComponent from "App/components/shared/footer.component";
import HomeViewComponent from "App/components/home/home.view.component";

const components = [
    WrapperComponent,
    ModalProductComponent,
    ModalComponent,
    ModalCartComponent,
    LoaderComponent,
    ProductViewComponent,
    ProductLoopComponent,
    IconComponent,
    ButtonComponent,
    PartnerHeaderComponent,
    ProductCardComponent,
    HeaderComponent,
    HeaderCartComponent,
    PartnerViewComponent,
    FooterComponent,
    HomeViewComponent
];

export default [...components, ...devComponent];
