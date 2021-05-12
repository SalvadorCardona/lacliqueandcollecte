<?php

declare(strict_types=1);

namespace App\Infrastructure\Search\DeNormalizer;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Search\Entity\Searchable;
use App\Infrastructure\Search\Entity\SearchableItem;

class SearchableDeNormalizer extends Formatter
{
    /**
     * @return Searchable[]
     */
    public function format(mixed $data): array
    {
        usort($data, function ($item1, $item2) {
            return $item1['searchableName'] <=> $item2['searchableName'];
        });

        $currentItem = null;
        $itemList = [];

        foreach ($data as $item) {
            if (!$currentItem || $item['searchableName'] != $currentItem->name) {
                $currentItem = new Searchable();
                $currentItem->name = $item['searchableName'];
                $currentItem->id = (int) $item['searchableId'];
                $itemList [] = $currentItem;
            }

            $searchableItem = new SearchableItem();
            $searchableItem->name = $item['searchableItemName'];
            $searchableItem->label = $item['searchableItemLabel'];
            $searchableItem->id = (int) $item['searchableItemId'];

            $currentItem->searchableItems [] = $searchableItem;
        }

        return $itemList;
    }
}
