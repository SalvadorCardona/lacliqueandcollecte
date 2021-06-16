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
import HeaderMobileComponent from "App/modules/shared/components/header/header.mobile.component";
import HeaderDesktopComponent from "App/modules/shared/components/header/header.desktop.component";
import EventService from "App/modules/shared/services/event.service";
import ModalService from "App/modules/shared/services/modal.service";
import LoaderService from "App/modules/shared/services/loader.service";
import ClientService from "App/modules/shared/services/client.service";
import CartService from "App/modules/shared/services/cart.service";
import ComponentService from "App/modules/shared/services/component.service";
import CartClient from "App/modules/shared/services/client/cart.client";
import ProductClient from "App/modules/shared/services/client/product.client";
import ConfigurationService from "App/modules/shared/services/configuration.service";
import PartnerClient from "App/modules/shared/services/client/partner.client";
import SearchClient from "App/modules/shared/services/client/search.client";
import SearchService from "App/modules/shared/services/search.service";
import TranslateService from "App/modules/shared/services/translate.service";
import RouterService from "App/modules/shared/services/router.service";
import RouterComponent from "App/modules/shared/components/router.component";
import InputTextareaComponent from "App/modules/shared/components/form/input.textarea.component";
import CookiesBannerComponent from "App/modules/shared/components/cookies-banner/cookies.banner.component";

const SharedModule = {
    components: [
        HeaderMobileComponent,
        HeaderDesktopComponent,
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
        RouterComponent,
        CookiesBannerComponent
    ],
    services: [
        ModalService,
        EventService,
        LoaderService,
        ClientService,
        CartService,
        ComponentService,
        CartClient,
        ProductClient,
        ConfigurationService,
        PartnerClient,
        SearchClient,
        SearchService,
        TranslateService,
        RouterService,
        InputTextareaComponent,
        CookiesBannerComponent,
    ]
} as Module;

export default SharedModule;