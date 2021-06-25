<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Filter;

use App\Infrastructure\Wordpress\Filter\AbstractFilter;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;

class TemplateLoaderFileFilter extends AbstractFilter
{

    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function __invoke(): mixed
    {
        return $this->wordpressMiddleware->isTax()
            || $this->wordpressMiddleware->isProduct()
            || $this->wordpressMiddleware->isShop()
            ? ['index.php'] : [];
    }

    public static function getName(): string
    {
        return 'woocommerce_template_loader_files';
    }
}
