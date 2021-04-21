import devComponent from "App/modules/dev/components";
import homeComponent from "App/modules/home/components";
import productComponent from "App/modules/product/components";
import partnerComponent from "App/modules/partner/components";
import sharedComponent from "App/modules/shared/components";

const components = [
    ...sharedComponent,
    ...productComponent,
    ...partnerComponent,
    ...devComponent,
    ...homeComponent
];

export default components;
