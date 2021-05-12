<?php

namespace App\Infrastructure\Partner\Formatter;

// TODO: I Need Unit Test
use App\Infrastructure\Formatter\Formatter;
use App\Infrastructure\Partner\Entity\Partner;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Post;

class PartnerFormatter extends Formatter
{
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    /**
     * @param WP_Post $data
     * @return array
     */
    public function format($data): array
    {
        $meta = $this->wordpressMiddleware->getPostMeta($data->ID);

        $metaCleaned = [];

        foreach (Partner::META_LIST as $field) {
            if (isset($meta[$field])) {
                $fieldValue = $meta[$field];
                $metaCleaned[$field] = count($fieldValue) > 1 ? $fieldValue : $fieldValue[0];
            }
        }

        if (isset($metaCleaned[Partner::FIELD_FACE_PICTURE])) {
            $metaCleaned[Partner::FIELD_FACE_PICTURE] = $this->wordpressMiddleware->getAttachmentImageSrc($metaCleaned[Partner::FIELD_FACE_PICTURE])[0];
        }

        if (isset($metaCleaned[Partner::FIELD_SHOP_PICTURE])) {
            $metaCleaned[Partner::FIELD_SHOP_PICTURE] = $this->wordpressMiddleware->getAttachmentImageSrc($metaCleaned[Partner::FIELD_SHOP_PICTURE])[0];
        }

        $dataFormatted = (array) $data;
        $dataFormatted['guid'] = $this->wordpressMiddleware->getPermalink($data);
        $dataFormatted['meta'] = $metaCleaned;

        return $dataFormatted;
    }
}
