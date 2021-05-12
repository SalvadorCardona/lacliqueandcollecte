import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";
import IconComponent from "App/modules/shared/components/icon.component";
import {injector} from "App/core/container.service";
import SearchService from "App/core/search.service";
import {Searchable} from "App/core/client/search.client";
import {property} from "lit-element/lib/decorators";

export default class SearchLeftBarComponent extends AppComponent {

    private closedClass = 'closed';

    @injector(SearchService)
    private searchService: SearchService;

    @property({type: Array})
    private searchableList: Searchable[] = [];

    public connectedCallback(): void {
        super.connectedCallback();

        this.searchService.onChange(state => {
            this.searchableList = state.searchableList;
        });
    }

    public static getComponentName(): string {
        return 'app-search-left-bar';
    }

    private toggleCategory($e: MouseEvent): void
    {
        const $elem = $e.target as Element;

        if ($elem.classList.contains(this.closedClass)) {
            $elem.classList.remove(this.closedClass);
            return;
        }

        $elem.classList.add(this.closedClass)
    }

    private onChange(searchableName: string, idSearchableItem: number|string): void
    {
        console.log(searchableName, idSearchableItem);
        const elem = e.target as HTMLInputElement;
        const [value, checked] = [elem.value, elem.checked];
    }

    private renderCategorySearch(searchable: Searchable): TemplateResult {
        return html`
            <div @click=${this.toggleCategory} class="head-categories
                p-3
                bg-primary
                border-radius
                d-flex
                justify-content-between">
                <span class="text-white
                    fw-bold
                    fs-5">${searchable.name}</span>
                ${this.createElement(IconComponent, {color: 'white', icon: 'biChevronCompactRight'})}
            </div>
            <div class="p-2">
                ${searchable.searchableItems.map(searchableItem => {
                    return InputCheckboxComponent.create(
                        searchableItem.label,
                        searchableItem.id,
                        this.searchService.isSelected(searchable.name, searchableItem.id),
                        () => this.onChange(searchable.name, searchableItem.id)
                    );
                })}
            </div> 
        `;
    }

    public render(): TemplateResult {
        return html`
            ${this.searchableList.map(searchable => this.renderCategorySearch(searchable))}
        `;
    }
}