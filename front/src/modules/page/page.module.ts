import Module from "App/modules/shared/types/module.type";
import PageViewsComponent from "App/modules/page/components/page.views.component";

const PageModule = {
    components: [
        PageViewsComponent
    ],
    defaultComponent: PageViewsComponent
} as Module;

export default PageModule;