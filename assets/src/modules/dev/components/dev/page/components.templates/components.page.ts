import buttonTemplate from "App/modules/dev/components/dev/page/components.templates/templates/ui.button.template";
import textTemplate from "App/modules/dev/components/dev/page/components.templates/templates/ui.text.template";
import formTemplate from "App/modules/dev/components/dev/page/components.templates/templates/ui.form.template";
import colorTemplate from "App/modules/dev/components/dev/page/components.templates/templates/ui.colors.template";
import products from "App/modules/dev/components/dev/page/components.templates/templates/ui.products.template";
import icons from "App/modules/dev/components/dev/page/components.templates/templates/ui.icon.template";

export default  `
<h2>Components</h2>
<div class="row">
    ${textTemplate}
    ${buttonTemplate}
    ${colorTemplate}
    ${formTemplate}
    ${icons}
</div>

<h2>Produit</h2>
    ${products}
</div>
`;