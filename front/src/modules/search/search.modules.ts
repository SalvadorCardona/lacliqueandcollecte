import Module from "App/types/module.type";
import SearchContentComponent from "App/modules/search/components/search.content.component";
import SearchLeftBarComponent from "App/modules/search/components/search.left.bar.component";
import SearchViewComponent from "App/modules/search/components/search.view.component";

const SearchModule = {
    components: [
        SearchContentComponent,
        SearchLeftBarComponent,
        SearchViewComponent,
    ],
    defaultComponent: SearchViewComponent
} as Module;

export default SearchModule;