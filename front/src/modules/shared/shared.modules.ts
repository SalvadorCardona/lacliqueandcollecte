import Module from "App/types/module.type";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import ModalProductComponent from "App/modules/shared/components/modal.product.component";
import ModalComponent from "App/modules/shared/components/modal.component";
import ModalCartComponent from "App/modules/shared/components/modal.cart.component";
import LoaderComponent from "App/modules/shared/components/loader.component";
import ProductLoopComponent from "App/modules/shared/components/product/product.loop.component";
import IconComponent from "App/modules/shared/components/icon.component";
import ButtonComponent from "App/modules/shared/components/button.component";
import ProductCardComponent from "App/modules/shared/components/product/product.card.component";
import HeaderComponent from "App/modules/shared/components/header/header.component";
import HeaderCartComponent from "App/modules/shared/components/header/header.cart.component";
import FooterComponent from "App/modules/shared/components/footer/footer.component";
import PartnerCardComponent from "App/modules/shared/components/partner/partner.card.component";
import PartnerLoopComponent from "App/modules/shared/components/partner/partner.loop.component";
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import InputRadioComponent from "App/modules/shared/components/form/input.radio.component";
import InputSelectComponent from "App/modules/shared/components/form/input.select.component";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";

export default {
    components: [
        WrapperComponent,
        ModalProductComponent,
        ModalComponent,
        ModalCartComponent,
        LoaderComponent,
        ProductLoopComponent,
        IconComponent,
        ButtonComponent,
        ProductCardComponent,
        HeaderComponent,
        HeaderCartComponent,
        FooterComponent,
        PartnerCardComponent,
        PartnerLoopComponent,
        InputBaseComponent,
        InputRadioComponent,
        InputSelectComponent,
        InputCheckboxComponent,
    ]
} as Module;