import Module from "App/types/module.type";
import DevMenuComponent from "App/modules/dev/components/dev.menu.component";
import DevComponent from "App/modules/dev/components/dev.components";
import UiViewComponent from "App/modules/dev/components/ui/ui.view.component";

export default {
    components: [
        DevMenuComponent,
        DevComponent,
        UiViewComponent
    ]
} as Module;