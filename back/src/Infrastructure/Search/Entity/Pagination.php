<?php

namespace App\Infrastructure\Search\Entity;

class Pagination
{
    public int $offset;
    public int $resultCount;
    public int $offsetLimit;
    public int $itemCount;
}
