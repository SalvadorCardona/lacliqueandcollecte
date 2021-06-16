import Module from "App/types/module.type";
import PageNotFoundViewComponent from "App/modules/page-not-found/components/page.not.found.view.component";

const PageNotFoundModule = {
    components: [
        PageNotFoundViewComponent
    ],
    defaultComponent: PageNotFoundViewComponent
} as Module;

export default PageNotFoundModule;