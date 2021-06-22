<?php

namespace App\Infrastructure\PartnerRequest\Entity;

class PartnerRequest
{
    public const POST_TYPE_NAME = 'partner-request';

    public string $firstName;
    public string $lastName;
    public string $description;
    public string $email;
    public string $phone;
    public string $siretNumber;
}
