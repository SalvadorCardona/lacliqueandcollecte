import components from "App/app.components";
import {AppComponent, getComponentSelector} from "App/components/custom.element";

export class ComponentService {
    private components: Array<typeof AppComponent> = components

    public loadComponents(): void {
        this.components.forEach(Component => {
            customElements.define(getComponentSelector(Component), Component);
        });
    }
}