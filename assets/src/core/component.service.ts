import components from "App/app.components";
import {getComponentSelector} from "App/components/custom.element";

export class ComponentService {
    private components: Array<any> = components

    public loadComponents() {
        this.components.forEach(Component => {
            customElements.define(getComponentSelector(Component), Component);
        });
    }
}