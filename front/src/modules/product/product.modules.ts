import Module from "App/types/module.type";
import ProductViewComponent from "App/modules/product/components/product.view.component";

const ProductModule = {
    components: [
        ProductViewComponent
    ],
    defaultComponent: ProductViewComponent
} as Module;

export default ProductModule;