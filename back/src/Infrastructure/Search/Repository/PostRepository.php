<?php
declare(strict_types=1);

namespace App\Infrastructure\Search\Repository;

use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class PostRepository
{
    public function __construct(WordpressMiddleware $wordpressMiddleware)
    {
    }
}