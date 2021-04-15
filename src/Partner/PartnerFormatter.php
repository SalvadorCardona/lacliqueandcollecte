<?php

namespace App\Partner;

// TODO: I Need Unit Test
class PartnerFormatter
{
    public function format(array $metaPartner): array
    {
        $partner = [];

        foreach (Partner::FIELD_LIST as $field) {
            if (isset($metaPartner[$field])) {
                $fieldValue = $metaPartner[$field];
                $partner[$field] = count($fieldValue) > 1 ? $fieldValue : $fieldValue[0];
            }
        }

        return $partner;
    }
}
