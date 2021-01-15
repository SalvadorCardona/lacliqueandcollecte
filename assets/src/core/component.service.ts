import components from "App/app.components";

export class ComponentService {
    private components: Array<any> = components

    public loadComponents() {
        this.components.forEach(Component => {
            customElements.define(Component.getSelectorName(), Component);
        });
    }
}