import {AppComponent, getComponentSelector} from "App/modules/shared/services/custom.element";
import {html, TemplateResult} from "lit-element";
import WrapperComponent from "App/modules/shared/components/wrapper.component";
import {injector} from "App/modules/shared/services/container.service";
import ComponentService from "App/modules/shared/services/component.service";

export default class UiListComponentComponent extends AppComponent {
    @injector(ComponentService)
    private componentService: ComponentService;

    public static getComponentName(): string {
        return 'app-icon-list-component-view';
    }

    public render(): TemplateResult {
        return html`
            ${this.createElement(WrapperComponent, {
                title: this.trans("ui.list.title"),
                body: this.componentList()
            })}
        `;
    }

    private componentList(): TemplateResult {
        return html`
            <ul>
                ${this.componentService.components.map(component => {
                    return html`
                        <li>
                            <${getComponentSelector(component)}/>
                        </li>
                    `;
                })}
            </ul>
        `;
    }
}
