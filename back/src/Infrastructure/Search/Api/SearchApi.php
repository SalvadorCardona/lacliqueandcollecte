<?php
declare(strict_types=1);

namespace App\Infrastructure\Search\Api;

use App\Infrastructure\Search\Repository\PostRepository;
use App\Infrastructure\Wordpress\Api\AbstractApiController;

class SearchApi extends AbstractApiController
{
    public function __construct(PostRepository $postRepository)
    {
    }

    public function __invoke(): mixed
    {
        $query = $this->request->get_query_params('query');

        return 'hello';
    }

    public function getEndPoint(): string
    {
        return 'search/(?P<query>\s+)';
    }
}