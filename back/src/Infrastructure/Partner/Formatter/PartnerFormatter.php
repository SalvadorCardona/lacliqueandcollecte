<?php

namespace App\Infrastructure\Partner\Formatter;

// TODO: I Need Unit Test
use App\Infrastructure\Partner\Partner;
use App\Infrastructure\Wordpress\Middleware\WordpressMiddleware;
use WP_Post;

class PartnerFormatter
{

    /**
     * PartnerFormatter constructor.
     */
    public function __construct(private WordpressMiddleware $wordpressMiddleware)
    {
    }

    public function format(WP_Post $partnerPost): array
    {
        $metaPartner = $this->wordpressMiddleware->getPostMeta($partnerPost->ID);

        $partnerMetaCleaned = [];

        foreach (Partner::FIELD_LIST as $field) {
            if (isset($metaPartner[$field])) {
                $fieldValue = $metaPartner[$field];
                $partnerMetaCleaned[$field] = count($fieldValue) > 1 ? $fieldValue : $fieldValue[0];
            }
        }

        if (isset($partnerMetaCleaned[Partner::FIELD_FACE_PICTURE])) {
            $partnerMetaCleaned[Partner::FIELD_FACE_PICTURE] = $this->wordpressMiddleware->getAttachmentImageSrc($partnerMetaCleaned[Partner::FIELD_FACE_PICTURE])[0];
        }

        if (isset($partnerMetaCleaned[Partner::FIELD_SHOP_PICTURE])) {
            $partnerMetaCleaned[Partner::FIELD_SHOP_PICTURE] = $this->wordpressMiddleware->getAttachmentImageSrc($partnerMetaCleaned[Partner::FIELD_SHOP_PICTURE])[0];
        }

        $partner = (array) $partnerPost;
        $partner['meta'] = $partnerMetaCleaned;

        return $partner;
    }
}
