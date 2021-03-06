<?php

declare(strict_types=1);

namespace App\Infrastructure\Woocommerce\Formatter;

use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Woocommerce\Entity\Product;
use App\Infrastructure\Wordpress\Enum\MetaType;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Post;

class ProductFormatter extends Formatter
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }
    /**
     * @param WP_Post $data
     * @return array
     */
    public function format(mixed $data): array
    {
        $meta = $this->wordpressMiddleware->getPostMeta($data->ID);

        $metaCleaned = [];

        foreach (Product::META_LIST as $field) {
            if (isset($meta[$field])) {
                $fieldValue = $meta[$field];
                $metaCleaned[$field] = count($fieldValue) > 1 ? $fieldValue : current($fieldValue);
            }
        }

        if (isset($metaCleaned[MetaType::THUMBNAIL])) {
            $metaCleaned['thumbnail'] = current($this->wordpressMiddleware->getAttachmentImageSrc((int) $metaCleaned[MetaType::THUMBNAIL]));
        }

        $dataFormatted = (array) $data;
        $dataFormatted['guid'] = $this->wordpressMiddleware->getPermalink($data);
        $dataFormatted['meta'] = $metaCleaned;

        return $dataFormatted;
    }
}
