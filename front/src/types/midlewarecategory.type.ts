export interface MiddlewareCategory
{
    termID:         number;
    name:           string;
    slug:           string;
    termGroup:      number;
    termTaxonomyID: number;
    taxonomy:       string;
    description:    string;
    parent:         number;
    count:          number;
    filter:         string;
    url:            string;
}
