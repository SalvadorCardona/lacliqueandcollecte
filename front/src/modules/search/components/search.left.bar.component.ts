import {AppComponent} from "App/core/custom.element";
import {html, TemplateResult} from "lit-element";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";
import IconComponent from "App/modules/shared/components/icon.component";

interface ItemSearch {
    label: string;
    selected: boolean;
    value: string;
}

interface CategorySearch {
    categoryLabel: string
    categoryName: string
    itemsSearch: ItemSearch[]
}

export default class SearchLeftBarComponent extends AppComponent {

    private closedClass = 'closed';

    private categorySearchList: CategorySearch[] = [
        {
            categoryLabel:this.trans("search.left.bar.category.label"),
            categoryName: this.trans("search.left.bar.category.name"),
            itemsSearch: [
                {
                    label: this.trans("search.left.bar.category.brasserie.label"),
                    selected: true,
                    value: this.trans("search.left.bar.category.brasserie.value"),
                },
                {
                    label: this.trans("search.left.bar.category.bois.label"),
                    selected: false,
                    value: this.trans("search.left.bar.category.bois.value"),

                },
                {
                    label: this.trans("search.left.bar.category.pierre.label"),
                    selected: true,
                    value: this.trans("search.left.bar.category.pierre.value"),
                }
            ]
        },
        {
            categoryLabel: this.trans("search.left.bar.category.label.tri"),
            categoryName: this.trans("search.left.bar.category.name.tri"),
            itemsSearch: [
                {
                    label: this.trans("search.left.bar.category.label.pertinent"),
                    selected: true,
                    value: this.trans("search.left.bar.category.value.pertinent")
                },
                {
                    label: this.trans("search.left.bar.category.label.prix"),
                    selected: false,
                    value: this.trans("search.left.bar.category.value.prix")
                },
                {
                    label:  this.trans("search.left.bar.category.label.lasted"),
                    selected: false,
                    value: this.trans("search.left.bar.category.value.lasted")
                }
            ]
        }
    ]

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

    private onChange(e: Event): void
    {
        console.log(e);
        // const elem = e.target as HTMLInputElement;
        // const [value, checked] = [elem.value, elem.checked];
    }

    private renderItemSearch(itemSearch: ItemSearch): TemplateResult {
        return html`
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${itemSearch.label}">
                <label class="form-check-label" for="${itemSearch.label}">
                    ${itemSearch.label}
                </label>
            </div>
            
        `;
    }

    private renderCategorySearch(categorySearch :CategorySearch): TemplateResult {
        return html`
            <div @click="${this.toggleCategory}" class="head-categories
                p-3
                bg-primary
                border-radius
                d-flex
                justify-content-between">
                <span class="text-white fw-bold fs-5">${categorySearch.categoryLabel}</span>
                ${this.createElement(IconComponent, {color: 'white', icon: 'biChevronCompactRight'})}
            </div>
            <div class="p-2">
                ${categorySearch.itemsSearch.map(itemSearch => {
                    return InputCheckboxComponent.create(
                            itemSearch.label,
                            itemSearch.value,
                            itemSearch.selected,
                            this.onChange
                    );
                })}
            </div> 
        `;
    }

    public render(): TemplateResult {
        return html`
            ${this.categorySearchList.map(categorySearch => this.renderCategorySearch(categorySearch))}
        `;
    }
}
