<?php

declare(strict_types=1);

namespace App\Register;

use App\Action\ActionInterface;

class ActionRegister
{
    /**
     * @var ActionInterface[]
     */
    private array $actions;

    public function registerActions(): void
    {
        foreach ($this->actions as $action) {
            add_action($action::getAction(), $action, 1000);
        }
    }

    public function addAction(ActionInterface $action): void
    {
        $this->actions [] = $action;
    }
}
