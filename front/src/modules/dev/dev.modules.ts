import Module from "App/modules/shared/types/module.type";
import DevMenuComponent from "App/modules/dev/components/dev.menu.component";
import DevComponent from "App/modules/dev/components/dev.components";
import UiViewComponent from "App/modules/dev/components/ui/ui.view.component";
import UiButtonComponent from "App/modules/dev/components/ui/ui.button.component";
import UiColorsComponent from "App/modules/dev/components/ui/ui.colors.component";
import UiFormComponent from "App/modules/dev/components/ui/ui.form.component";
import UiIconComponent from "App/modules/dev/components/ui/ui.icon.component";
import UiProductsComponent from "App/modules/dev/components/ui/ui.products.component";
import UiTextAroundComponent from "App/modules/dev/components/ui/ui.text.around.component";
import UiTextComponent from "App/modules/dev/components/ui/ui.text.component";
import UiListComponentComponent from "App/modules/dev/components/ui/ui.list.component.component";

const DevModule = {
    components: [
        DevMenuComponent,
        DevComponent,
        UiViewComponent,
        UiButtonComponent,
        UiColorsComponent,
        UiFormComponent,
        UiIconComponent,
        UiProductsComponent,
        UiTextAroundComponent,
        UiTextComponent,
        UiListComponentComponent
    ]
} as Module;

export default DevModule;