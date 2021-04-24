import {AppComponent} from "App/core/custom.element";
import {html , TemplateResult} from "lit-element";
import InputCheckboxComponent from "App/modules/shared/components/form/input.checkbox.component";

interface ItemSearch {
    label: string;
    selected: boolean;
    value: string;
}

interface CategorySearch {
    categoryName: string
    itemsSearch: ItemSearch[]
}

export default class SearchLeftBarComponent extends AppComponent {

    private closedClass = 'closed';

    private categorySearchList: CategorySearch[] = [
        {
            categoryName: 'Catégorie',
            itemsSearch: [
                {
                    label: 'Brasserie',
                    selected: true,
                    value: 'brasserie'
                },
                {
                    label: 'Bois',
                    selected: false,
                    value: 'bois'
                },
                {
                    label: 'Pierre',
                    selected: true,
                    value: 'pierre'
                }
            ]
        },
        {
            categoryName: 'Tri',
            itemsSearch: [
                {
                    label: 'Pertinant',
                    selected: true,
                    value: 'pertinant'
                },
                {
                    label: 'Prix',
                    selected: false,
                    value: 'prix'
                },
                {
                    label: 'Lasted',
                    selected: false,
                    value: 'lasted'
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
        const elem = e.target as HTMLInputElement;
        const [value, checked] = [elem.value, elem.checked];
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
                <span class="text-white fw-bold fs-5">${categorySearch.categoryName}</span>
                <app-icon color="white" icon="biChevronCompactRight"></app-icon>
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