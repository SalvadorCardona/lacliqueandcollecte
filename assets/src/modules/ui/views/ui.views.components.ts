import buttonTemplate from "App/modules/ui/components/ui.button.template";
import textTemplate from "App/modules/ui/components/ui.text.template";
import formTemplate from "App/modules/ui/components/ui.form.template";
import colorTemplate from "App/modules/ui/components/ui.colors.template";
import products from "App/modules/ui/components/ui.products.template";
import icons from "App/modules/ui/components/ui.icon.template";

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