import {Module} from "App/types/module.type";
import SearchContentComponent from "App/modules/search/components/search.content.component";
import SearchLeftBarComponent from "App/modules/search/components/search.left.bar.component";
import SearchViewComponent from "App/modules/search/components/search.view.component";
import SearchService from "App/modules/search/service/search.service";

export default {
    components: [
        SearchContentComponent,
        SearchLeftBarComponent,
        SearchViewComponent,
    ],
    services: [
        SearchService
    ]
} as Module;