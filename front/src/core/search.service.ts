import AbstractStore from "App/core/abstract.store";
import {injector} from "App/core/container.service";
import SearchClient, {SearchParams, SearchResponse} from "App/core/client/search.client";

export default class SearchService extends AbstractStore<SearchResponse> {
    @injector(SearchClient)
    private searchClient: SearchClient;

    private searchParams: SearchParams;

    public search(searchParams: SearchParams): void {
        this.searchParams = searchParams;

        this.searchClient.search(this.searchParams)
            .then(searchResponse => this.state = searchResponse);
    }

    public hasSearchable(searchableName: string): boolean
    {
        return this.searchParams[searchableName] != undefined;
    }

    public isSelected(searchableName: string, idSearchableItem: number|string): boolean
    {
        if (!this.hasSearchable(searchableName)) return false;

        const searchable = this.searchParams[searchableName];

        if (Array.isArray(searchable)) {
            return searchable.includes(idSearchableItem);
        }

        return false;
    }

    public toggleSearchableItem(searchableName: string, idSearchableItem: number|string): void
    {
        if (!this.isSelected(searchableName, idSearchableItem)) {
            if (Array.isArray(this.searchParams[searchableName])) {
                this.searchParams[searchableName].push(idSearchableItem);
                return;
            }

            this.searchParams[searchableName] = idSearchableItem;
            return;
        }

        if (Array.isArray(this.searchParams[searchableName])) {
            this.searchParams[searchableName].splice(
                this.searchParams[searchableName].indexOf(idSearchableItem),
                1
            );
            return;
        }

        this.searchParams[searchableName] = null;
    }


}