<?php

namespace App\Infrastructure\Search\Entity;

class SearchRequest
{
    private ?array $params;

    public function setParams(?array $params): self
    {
        $this->params = $params;

        return $this;
    }

    public function getTaxonomies(): array {

    }

    public function getMetasData(): array {

    }

    public function getOrderBy(): string {

    }

    public function getOrderDirection: string {

    }
}
