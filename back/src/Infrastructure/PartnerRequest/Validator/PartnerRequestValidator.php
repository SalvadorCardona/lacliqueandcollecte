<?php

namespace App\Infrastructure\PartnerRequest\Validator;

use App\Infrastructure\PartnerRequest\Entity\PartnerRequest;

class PartnerRequestValidator
{
    private $errors = [];

    /**
     * @param PartnerRequest $partnerRequest
     */
    public function validator(PartnerRequest $partnerRequest): ?array
    {
        if (strlen($partnerRequest->firstName) > 30) {
            $this->errors ['firstName'] = "Firstname is too long.";
        }
        if (strlen($partnerRequest->lastName) > 30) {
            $this->errors ['lastName'] = "lastname is too long.";
        }
        if (strlen($partnerRequest->email) > 50) {
            $this->errors ['email'] = "Email is too long.";
        }
        if (strlen($partnerRequest->phone) > 15) {
            $this->errors ['phone'] = "Phone is too long.";
        }
        if (strlen($partnerRequest->description) < 200) {
            $this->errors ['description'] = "Description is too short.";
        }
        if (strlen($partnerRequest->siretNumber) != 14) {
            $this->errors ['siretNumber'] = "SIRET number must equals 14 numbers";
        }
        if (!empty($this->errors)) {
            return $this->errors;
        }

        return null;
    }
}
