<?php

namespace App\Infrastructure\Search\Entity;

class SearchRequest
{
    public ?string $query;
    public ?string $orderBy;
    public ?string $orderDirection;
    /**
     * @var array<string, mixed>
     */
    public ?array $filters;

    /**
     * SearchRequest constructor.
     * @param string|null $query
     * @param string|null $orderBy
     * @param string|null $orderDirection
     * @param mixed[]|null $filters
     */
    public function __construct(?string $query, ?string $orderBy, ?string $orderDirection, ?array $filters)
    {
        $this->query = $query;
        $this->orderBy = $orderBy;
        $this->orderDirection = $orderDirection;
        $this->filters = $filters;
    }
}