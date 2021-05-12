<?php

namespace App\Infrastructure\Search\Entity;

class SearchResponse
{
    public ?array $items;
    public int $itemCount = 0;
    public int $itemPerPage = 20;
    public ?array $searchableList;

    public function __construct(?array $items, int $itemCount, int $itemPerPage, array $searchableList = null)
    {
        $this->items = $items;
        $this->itemCount = $itemCount;
        $this->itemPerPage = $itemPerPage;
        $this->searchableList = $searchableList;
    }
}
