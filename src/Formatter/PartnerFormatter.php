<?php

namespace App\Formatter;

use App\Action\AddPostTypePartner;

// TODO: I Need Unit Test
class PartnerFormatter
{
    public function format(array $metaPartner): array
    {
        return array_filter(array_map(function (string $field) use ($metaPartner) {
            if (isset($metaPartner[$field])) {
                $fieldValue = $metaPartner[$field];
                return [$field => count($fieldValue) > 0 ? $fieldValue : array_shift($fieldValue)];
            }
            return null;
        }, AddPostTypePartner::FIELD_LIST));
    }
}
