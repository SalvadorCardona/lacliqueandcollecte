export interface TermType {
    termID:         number;
    name:           string;
    slug:           string;
    termGroup:      number;
    termTaxonomyId: number;
    taxonomy:       string;
    description:    string;
    parent:         number;
    count:          number;
    filter:         string;
}