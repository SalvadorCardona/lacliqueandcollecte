<?php
/**
 * GeneratePress child theme functions and definitions.
 *
 * Add your custom PHP in this file.
 * Only edit this file if you have direct access to it on your server (to fix errors if they happen).
 */

use App\Kernel;
use App\Service\ActionService;

/** @var ActionService $eventService */
$eventService = Kernel::getAPP()
    ->getContainer()
    ->get(ActionService::class);

$eventService->registerActions();