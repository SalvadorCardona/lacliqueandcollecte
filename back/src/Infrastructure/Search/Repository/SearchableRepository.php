<?php
declare(strict_types=1);


namespace App\Infrastructure\Search\Repository;


use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class SearchableRepository
{
    public function __construct(
        private WordpressMiddleware $wordpressMiddleware,
    ) {
    }

    public function fetchSearchable(array $taxonomyList, array $metaList): ?array
    {
        $wpdb = $this->wordpressMiddleware->getWpdb();

        $taxonomyListValues = $this->getValues($taxonomyList);
        $metaListValues = $this->getValues($metaList);

        $request = <<<SQL
        SELECT 
            DISTINCT terms_return.term_id as searchableItemId,
            terms_return.name as searchableItemLabel,
            terms_return.slug as searchableItemName,
            taxonomy_return.taxonomy as searchableName,
            taxonomy_return.term_taxonomy_id as searchableId
        FROM wpzar_terms as terms
            JOIN wpzar_term_taxonomy as taxonomy ON taxonomy.term_id = terms.term_id
            JOIN wpzar_term_relationships as term_relation_ship ON term_relation_ship.term_taxonomy_id = taxonomy.term_taxonomy_id
            JOIN wpzar_posts as posts ON posts.ID = term_relation_ship.object_id
            JOIN wpzar_postmeta as postmeta ON postmeta.post_id = posts.ID
            JOIN wpzar_term_relationships as term_relation_ship_return ON term_relation_ship_return.object_id = posts.ID
            JOIN wpzar_term_taxonomy as taxonomy_return ON taxonomy_return.term_id = term_relation_ship_return.term_taxonomy_id
            JOIN wpzar_terms as terms_return ON terms_return.term_id = taxonomy_return.term_id
        SQL;

        if (count($taxonomyListValues) > 0 || count($metaListValues) > 0) {
            $request .= " WHERE 1=1 ";

            if (count($metaListValues) > 0) {
                $metaListString = implode(',', $metaListValues);
                $request .= " AND postmeta.meta_value IN ({implode(',', $metaListString)}) ";
            }
            if (count($taxonomyListValues) > 0) {
                $taxonomyListString = implode(',', $taxonomyListValues);
                $request .= " AND terms.term_id IN ({$taxonomyListString}) ";
            }
        }

        return (array) $wpdb->get_results($request, ARRAY_A);
    }

    private function getValues(array $items): array
    {
        $values = [];

        foreach ($items as $item) {
            $values = array_merge($values, array_values($item));
        }

        return $values;
    }
}