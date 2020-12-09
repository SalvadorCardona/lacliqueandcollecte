<?php
declare(strict_types=1);

namespace App;

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
            add_action($action::getAction(), $action);
        }
    }

    public function addAction(ActionInterface $action): void
    {
        $this->actions []= $action;
    }
}
