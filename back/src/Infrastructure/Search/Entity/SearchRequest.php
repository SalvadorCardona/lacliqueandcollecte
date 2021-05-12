<?php

namespace App\Infrastructure\Search\Entity;

use App\Infrastructure\Wordpress\Enum\MetaType;
use App\Infrastructure\Wordpress\Enum\PostDataType;
use App\Infrastructure\Wordpress\Enum\TaxonomyType;

class SearchRequest
{
    private ?array $params;

    public static function fromArray(mixed $params): self
    {
        $self = new SearchRequest();
        $self->setParams($params);

        return $self;
    }

    public function setParams(?array $params): self
    {
        $this->params = $params;

        return $this;
    }

    private function extractToParams(array $extractList): array
    {
        $result = [];

        foreach ($this->params as $key => $filter) {
            if (in_array($key, $extractList)) {
                $result[$key] = $filter;
            }
        }

        return $result;
    }

    public function getParam(string $param): mixed
    {
        if (!isset($this->params[$param])) {
            return null;
        }

        return $this->params[$param];
    }

    public function getTaxonomies(): array
    {
        return $this->extractToParams(TaxonomyType::values());
    }

    public function getMetasData(): array
    {
        return $this->extractToParams(MetaType::values());
    }

    public function getPostData(): array
    {
        return $this->extractToParams(PostDataType::values());
    }

    public function getOrderBy(): ?string
    {
        return $this->getParam('orderBy');
    }

    public function getOrderDirection(): ?string
    {
        return $this->getParam('orderDirection');
    }

    public function getPostPerPage(): ?int
    {
        return (int) $this->getParam('posts_per_page');
    }

    public function getAuthors(): ?array
    {
        return $this->getParam('author__in');
    }

    public function getSearchable(): bool
    {
        return (bool) $this->getParam('searchable');
    }

    public function getPostType(): ?string
    {
        return $this->getParam('post_type');
    }
}
