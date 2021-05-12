<?php
declare(strict_types=1);

namespace App\Tests;

class TestCase extends \PHPUnit\Framework\TestCase
{
    public function normalize($args): mixed
    {
        return json_decode(json_encode($args), true);
    }
}